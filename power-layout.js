// Display-only Crackle grid routing. The production solver still uses Aniimo timings; this
// module answers the separate spatial question: can the facilities the player selected touch a
// connected Generator/Power Pole coverage field without utilities overlapping buildings?

const EPS = 1e-7;
const intersects = (a, b) => a.x < b.x + b.w - EPS && b.x < a.x + a.w - EPS
    && a.y < b.y + b.h - EPS && b.y < a.y + a.h - EPS;
const inside = (r, cell) => r.x >= cell.x - EPS && r.y >= cell.y - EPS
    && r.x + r.w <= cell.x + cell.w + EPS && r.y + r.h <= cell.y + cell.h + EPS;
const fieldFor = (r, size) => ({
    x: r.x + r.w / 2 - size / 2, y: r.y + r.h / 2 - size / 2, w: size, h: size,
});
const centerDistance = (a, b) => Math.hypot(a.x + a.w / 2 - (b.x + b.w / 2), a.y + a.h / 2 - (b.y + b.h / 2));

function candidates(cells, footprint, occupied) {
    const [w, h] = footprint;
    const result = [];
    for (const cell of cells) {
        for (let y = cell.y; y <= cell.y + cell.h - h + EPS; y += 0.5) {
            for (let x = cell.x; x <= cell.x + cell.w - w + EPS; x += 0.5) {
                const r = { x, y, w, h };
                if (inside(r, cell) && !occupied.some(o => intersects(r, o))) result.push(r);
            }
        }
    }
    return result;
}

export function routePowerGrid({ targets, occupied, cells, generatorFootprint = [2, 2],
    generatorCoverage = 11, poleFootprint = [1.5, 1.5], poleCoverage = 7, poleCap = 0 }) {
    if (!targets.length) return { generator: null, poles: [], fields: [], unpowered: [] };
    const generatorCandidates = candidates(cells, generatorFootprint, occupied);
    if (!generatorCandidates.length) return { generator: null, poles: [], fields: [], unpowered: [...targets] };
    const generator = generatorCandidates.reduce((best, candidate) => {
        const score = targets.reduce((sum, target) => sum + centerDistance(candidate, target), 0);
        return !best || score < best.score ? { rect: candidate, score } : best;
    }, null).rect;
    const fields = [{ ...fieldFor(generator, generatorCoverage), source: 'generator' }];
    const poles = [];
    const isPowered = target => fields.some(field => intersects(field, target));
    let unpowered = targets.filter(target => !isPowered(target));

    while (unpowered.length && poles.length < poleCap) {
        const poleCandidates = candidates(cells, poleFootprint, [...occupied, generator, ...poles])
            .filter(pole => {
                const field = fieldFor(pole, poleCoverage);
                return fields.some(existing => intersects(field, existing));
            });
        let best = null;
        for (const pole of poleCandidates) {
            const field = fieldFor(pole, poleCoverage);
            const newlyPowered = unpowered.filter(target => intersects(field, target));
            const distance = Math.min(...unpowered.map(target => centerDistance(pole, target)));
            const score = newlyPowered.length * 100000 - distance;
            if (!best || score > best.score) best = { pole, field, newlyPowered, score };
        }
        if (!best) break;
        poles.push(best.pole);
        fields.push({ ...best.field, source: 'pole' });
        unpowered = targets.filter(target => !isPowered(target));
    }
    return { generator, poles, fields, unpowered };
}
