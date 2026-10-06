import assert from 'node:assert/strict';
import test from 'node:test';

import { layOutZonedHomeland, rotateLayoutDistricts } from '../web/layout.js';
import { STORAGE_UNIT_MAX } from '../web/facility-config.js';

test('storage unit cap follows the RV level', () => {
    assert.equal(STORAGE_UNIT_MAX[1], 1);
    assert.equal(STORAGE_UNIT_MAX[3], 2);
    assert.equal(STORAGE_UNIT_MAX[10], 4);
    assert.equal(STORAGE_UNIT_MAX[19], 8);
});

test('a complete production district rotates with its storage unit', () => {
    const layout = {
        storage: { x: 3, y: 3, w: 2, h: 2, label: 'farm' },
        storages: [{ x: 3, y: 3, w: 2, h: 2, label: 'farm' }],
        pieces: [{ layoutGroup: 'farm', members: [
            { x: 0, y: 0, w: 2, h: 1, weight: 1, facility: 'Farmland', layoutGroup: 'farm' },
            { x: 2, y: 0, w: 1, h: 1, weight: 1, facility: 'Woodland', layoutGroup: 'farm' },
        ] }],
    };
    const result = rotateLayoutDistricts(layout, [{ x: -10, y: -10, w: 30, h: 30 }], { farm: 1 });
    const members = result.pieces[0].members;
    const width = Math.max(...members.map(m => m.x + m.w)) - Math.min(...members.map(m => m.x));
    const height = Math.max(...members.map(m => m.y + m.h)) - Math.min(...members.map(m => m.y));
    assert.equal(width, 1);
    assert.equal(height, 3);
    assert.notDeepEqual(result.storages[0], layout.storages[0]);
    assert.deepEqual(result.rejectedRotations, []);
});

test('a district turn is rejected when it would leave the open plots', () => {
    const layout = {
        storage: { x: 0, y: 0, w: 2, h: 2, label: 'farm' },
        storages: [{ x: 0, y: 0, w: 2, h: 2, label: 'farm' }],
        pieces: [{ layoutGroup: 'farm', members: [
            { x: 2, y: 0, w: 6, h: 1, facility: 'Farmland', layoutGroup: 'farm' },
        ] }],
    };
    const result = rotateLayoutDistricts(layout, [{ x: 0, y: 0, w: 8, h: 2 }], { farm: 1 });
    assert.deepEqual(result.rejectedRotations, ['farm']);
    assert.deepEqual(result.storages, layout.storages);
    assert.deepEqual(result.pieces[0].members, layout.pieces[0].members);
});

test('future expansion slots may rotate through future plots', () => {
    const layout = {
        storage: { x: 4, y: 4, w: 2, h: 2, label: 'work' },
        storages: [{ x: 4, y: 4, w: 2, h: 2, label: 'work' }],
        pieces: [{ layoutGroup: 'industry', members: [
            { x: 2, y: 4, w: 2, h: 2, layoutGroup: 'industry' },
            { x: 8, y: 4, w: 2, h: 2, reserved: true, layoutGroup: 'industry' },
        ] }],
    };
    const open = [{ x: 0, y: 0, w: 8, h: 7 }];
    const future = [{ x: 0, y: 0, w: 12, h: 12 }];
    const result = rotateLayoutDistricts(layout, open, { work: 1 }, future);
    assert.deepEqual(result.rejectedRotations, []);
    assert.notDeepEqual(result.pieces[0].members, layout.pieces[0].members);
    assert.ok(result.pieces[0].members.find(member => member.reserved).y >= 7);
});

test('four-storage layout merges workshops and assigns the spare by hauling demand', () => {
    const member = (facility, layoutGroup) => ({
        layoutGroup,
        members: [{ x: 0, y: 0, w: 1, h: 1, weight: 1, facility, crop: facility, cycle: 60 }],
    });
    const pieces = [
        member('Farmland', 'farm'),
        member('Mine', 'primary'),
        member('Jukebox Dryer', 'food'),
        member('Crafting Table', 'industry'),
    ];
    const cells = [
        { x: 0, y: 0, w: 20, h: 15 }, { x: 20, y: 0, w: 20, h: 15 },
        { x: 0, y: 15, w: 20, h: 15 }, { x: 20, y: 15, w: 20, h: 15 },
    ];
    const result = layOutZonedHomeland(pieces, cells, 4);
    assert.equal(result.storages.length, 4);
    assert.equal(result.unplaced.length, 0);
    assert.deepEqual(new Set(result.pieces.flatMap(piece => piece.members).map(m => m.storageIndex)), new Set([0, 1, 2, 3]));
    assert.equal(result.storages.filter(storage => storage.label === 'work').length, 2);
    assert.equal(result.storages.filter(storage => storage.label === 'farm').length, 1);
    assert.equal(result.storages.filter(storage => storage.label === 'primary').length, 1);
    const [workA, workB] = result.storages.filter(storage => storage.label === 'work');
    assert.equal(Math.hypot(workA.x - workB.x, workA.y - workB.y), 10);
});

test('four-storage layout gives the spare warehouse to busy farming', () => {
    const member = (facility, layoutGroup, weight) => ({
        layoutGroup,
        members: [{ x: 0, y: 0, w: 1, h: 1, weight, facility }],
    });
    const pieces = [
        member('Farmland', 'farm', 20), member('Woodland', 'farm', 20),
        member('Mine', 'primary', 1),
        member('Jukebox Dryer', 'food', 1), member('Crafting Table', 'industry', 1),
    ];
    const cells = [
        { x: 0, y: 0, w: 20, h: 15 }, { x: 20, y: 0, w: 20, h: 15 },
        { x: 0, y: 15, w: 20, h: 15 }, { x: 20, y: 15, w: 20, h: 15 },
    ];
    const result = layOutZonedHomeland(pieces, cells, 4);
    assert.equal(result.storages.filter(storage => storage.label === 'farm').length, 2);
    const [farmA, farmB] = result.storages.filter(storage => storage.label === 'farm');
    assert.equal(Math.hypot(farmA.x - farmB.x, farmA.y - farmB.y), 10);
    const farmStorageIndices = new Set(result.pieces
        .filter(piece => piece.layoutGroup === 'farm')
        .flatMap(piece => piece.members.map(member => member.storageIndex)));
    assert.equal(farmStorageIndices.size, 2);
});

test('future expansion slots may reserve locked plots while active facilities stay open', () => {
    const pieces = [{ layoutGroup: 'industry', members: [
        { x: 0, y: 0, w: 4, h: 4, weight: 1, facility: 'Crafting Table' },
        { x: 4, y: 0, w: 4, h: 4, weight: 0, facility: 'Crafting Table', reserved: true },
        { x: 8, y: 0, w: 4, h: 4, weight: 0, facility: 'Crafting Table', reserved: true },
    ] }];
    const open = [{ x: 0, y: 0, w: 10, h: 10 }];
    const future = [{ x: 0, y: 0, w: 20, h: 10 }];
    const result = layOutZonedHomeland(pieces, open, 1, undefined, future);
    assert.equal(result.unplaced.length, 0);
    const [active, ...reserved] = result.pieces[0].members;
    assert.ok(active.x >= 0 && active.y >= 0 && active.x + active.w <= 10 && active.y + active.h <= 10);
    assert.ok(reserved.every(slot => slot.reserved));
    assert.ok(reserved.some(slot => slot.x + slot.w > 10));
});
