const { expect } = require("@jest/globals");
const duplicate = require("./9.js");

test("should duplicate [1, 2, 3, 4, 5] and return [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]", () => {
  expect(duplicate([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
});
test("should duplicate [2, 4, 6, 22, 0] and return [2, 4, 6, 22, 0, 2, 4, 6, 22, 0]", () => {
  expect(duplicate([2, 4, 6, 22, 0])).toEqual([2, 4, 6, 22, 0, 2, 4, 6, 22, 0]);
});