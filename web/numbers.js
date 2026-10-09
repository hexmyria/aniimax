// Floors quantities that represent completed whole items without turning solver noise such as
// 17.999999999999996 into 17. Values genuinely below the next integer remain floored.
export function wholeFloor(value) {
    if (!Number.isFinite(value)) return 0;
    const tolerance = Math.max(1e-7, Number.EPSILON * Math.max(1, Math.abs(value)) * 16);
    return Math.floor(value + tolerance);
}
