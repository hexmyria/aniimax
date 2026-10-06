import assert from 'node:assert/strict';
import test from 'node:test';

import { sharedFacilityUtilization, theoreticalUtilization } from '../web/utilization.js';

test('theoretical utilization is busy units divided by available units', () => {
    assert.equal(theoreticalUtilization({ status: 'producing', busy_units: 0.75, facility_count: 2 }), 0.375);
    assert.equal(theoreticalUtilization({ status: 'idle', busy_units: null, facility_count: 1 }), 0);
    assert.equal(theoreticalUtilization({ status: 'producing', busy_units: null, facility_count: 1 }), null);
});

test('time-sharing facilities show the combined load of their recipes', () => {
    const rows = [
        { facility: 'Woodworking Bench', status: 'producing', busy_units: 0.25, facility_count: 1 },
        { facility: 'Woodworking Bench', status: 'producing', busy_units: 0.5, facility_count: 1 },
    ];
    assert.equal(sharedFacilityUtilization(rows, 'Woodworking Bench'), 0.75);
    assert.equal(sharedFacilityUtilization([
        { facility: 'Chimney Kiln', status: 'producing', busy_units: 0.8, facility_count: 1 },
        { facility: 'Chimney Kiln', status: 'producing', busy_units: 0.8, facility_count: 1 },
    ], 'Chimney Kiln'), 0.8);
    assert.equal(sharedFacilityUtilization(rows, 'Crafting Table'), null);
});
