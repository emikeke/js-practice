const sumOfArrays = require("./4.js");

test("should return sum of array to 22", () => {
  expect(sumOfArrays([[3, 2], [1], [4, 12]])).toBe(22);
});