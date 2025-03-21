import { isTriplet } from "./pythagoras";

test("should return true for a valid Pythagorean triplet", () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test("should return false for an invalid Pythagorean triplet", () => {
    expect(isTriplet(3, 4, 6)).toBe(false);
});
