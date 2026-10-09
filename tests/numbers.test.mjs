import assert from 'node:assert/strict';
import test from 'node:test';
import { wholeFloor } from '../web/numbers.js';

test('whole item flooring corrects floating-point noise at an integer', () => {
    assert.equal(wholeFloor(17.999999999999996), 18);
    assert.equal(wholeFloor(18), 18);
});

test('whole item flooring does not round genuinely incomplete items up', () => {
    assert.equal(wholeFloor(17.999), 17);
    assert.equal(wholeFloor(17.5), 17);
});
