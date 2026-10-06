import assert from 'node:assert/strict';
import test from 'node:test';
import { routePowerGrid } from '../web/power-layout.js';

const cells = [{ x: 0, y: 0, w: 40, h: 15 }];

test('a nearby selected facility uses generator coverage without a pole', () => {
    const target = { x: 8, y: 5, w: 2, h: 2 };
    const grid = routePowerGrid({ targets: [target], occupied: [target], cells, poleCap: 6 });
    assert.ok(grid.generator);
    assert.equal(grid.poles.length, 0);
    assert.deepEqual(grid.unpowered, []);
});

test('distant selected facilities are joined by a connected relay chain', () => {
    const targets = [{ x: 1, y: 5, w: 2, h: 2 }, { x: 36, y: 5, w: 2, h: 2 }];
    const grid = routePowerGrid({ targets, occupied: targets, cells, poleCap: 12 });
    assert.ok(grid.generator);
    assert.ok(grid.poles.length > 0);
    assert.deepEqual(grid.unpowered, []);
    grid.fields.slice(1).forEach((field, i) => {
        assert.ok(grid.fields.slice(0, i + 1).some(previous =>
            field.x < previous.x + previous.w && previous.x < field.x + field.w
            && field.y < previous.y + previous.h && previous.y < field.y + field.h));
    });
});

test('reports selected facilities that cannot be routed within the pole cap', () => {
    const targets = [{ x: 1, y: 5, w: 2, h: 2 }, { x: 36, y: 5, w: 2, h: 2 }];
    const grid = routePowerGrid({ targets, occupied: targets, cells, poleCap: 0 });
    assert.ok(grid.unpowered.length > 0);
});
