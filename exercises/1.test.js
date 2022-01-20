const printingNumbers = require("./1.js");

test("prints numbers 1 to 10 in an array", () => {
  expect(printingNumbers(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});