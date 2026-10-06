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
