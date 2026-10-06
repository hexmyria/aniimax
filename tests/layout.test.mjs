import assert from 'node:assert/strict';
import test from 'node:test';

import { layOutZonedHomeland } from '../web/layout.js';
import { STORAGE_UNIT_MAX } from '../web/facility-config.js';

test('storage unit cap follows the RV level', () => {
    assert.equal(STORAGE_UNIT_MAX[1], 1);
    assert.equal(STORAGE_UNIT_MAX[3], 2);
    assert.equal(STORAGE_UNIT_MAX[10], 4);
    assert.equal(STORAGE_UNIT_MAX[19], 8);
});

test('zoned layout assigns categories to separate storage units', () => {
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
    const food = result.storages.find(storage => storage.label === 'food');
    const industry = result.storages.find(storage => storage.label === 'industry');
    assert.equal(Math.hypot(food.x - industry.x, food.y - industry.y), 2);
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
