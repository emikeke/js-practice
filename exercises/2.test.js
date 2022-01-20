const luckySevens = require("./2.js");

test("should take an array of integers and returns false if any three consecutive integers sum to 7", () => {
  expect(luckySevens([1, 2, 3, 4, 5])).toBe(false);
});
test("should take an array of integers and returns true if any three consecutive integers sum to 7", () => {
  expect(luckySevens([0, 1, 2, 4, 5])).toBe(true);
});
