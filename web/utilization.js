// Display-only utilization helpers. The solver already reports `busy_units`, the average
// number of this row's facility units that are processing. Keep this calculation outside the
// optimizer so showing it cannot change which plan is selected.

export const TIME_SHARING_FACILITIES = new Set(['Woodworking Bench', 'Chimney Kiln']);

export function theoreticalUtilization(step) {
    if (step.status !== 'producing') return 0;
    if (!Number.isFinite(step.busy_units) || !Number.isFinite(step.facility_count) || step.facility_count <= 0) {
        return null;
    }
    return Math.max(0, Math.min(1, step.busy_units / step.facility_count));
}

// The Bench and Kiln alternate recipes on the same units. Their total therefore divides the
// combined busy time by the whole units needed to carry that combined load, matching the exact
// planner's shared-capacity rule rather than adding the repeated count from each recipe row.
export function sharedFacilityUtilization(rows, facility) {
    if (!TIME_SHARING_FACILITIES.has(facility)) return null;
    const producing = rows.filter(step => step.facility === facility && step.status === 'producing');
    if (producing.length < 2 || producing.some(step => !Number.isFinite(step.busy_units))) return null;
    const busy = producing.reduce((sum, step) => sum + step.busy_units, 0);
    const capacity = Math.ceil(Math.max(0, busy - 1e-6));
    if (capacity <= 0) return null;
    return Math.max(0, Math.min(1, busy / capacity));
}

// Physical units needed when finite jobs are run one after another manually. Individual recipe
// rows each round up to a unit for display, but their combined busy time is the actual capacity.
export function sharedPhysicalCount(rows, facility) {
    const producing = rows.filter(step => step.facility === facility && step.status === 'producing');
    if (producing.length < 2 || producing.some(step => !Number.isFinite(step.busy_units))) return null;
    return Math.max(1, Math.ceil(producing.reduce((sum, step) => sum + step.busy_units, 0) - 1e-6));
}
