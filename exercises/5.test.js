const divisorsOfThree = require("./5.js");

test("should print divisors by 3 with ': div3'", () => {
  expect(divisorsOfThree(3, 9)).toEqual([ '3: div3', 4, 5, '6: div3', 7, 8, '9: div3' ]);
});
test("should print divisors by 3 with ': div3'", () => {
  expect(divisorsOfThree(2, 10)).toEqual([ 2, '3: div3', 4, 5, '6: div3', 7, 8, '9: div3', 10 ]);
});