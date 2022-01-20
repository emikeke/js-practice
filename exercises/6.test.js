const oddballSum = require("./6.js");

test("should return sum of 9 of all odd elements when given list of numbers", () => {
  expect(oddballSum([1, 2, 3, 4, 5])).toEqual(9);
});
test("should return sum of 16 all odd elements when given list of numbers", () => {
  expect(oddballSum([3, 5, 7, 2, 1])).toEqual(16);
});