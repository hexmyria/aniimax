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
});
