const addOneToEach = require("./7.js");

test("takes an array of integers and should reuturn sum of 14 after adding 1 to each", () => {
  expect(addOneToEach([1, 2, 3, 4])).toBe(14);
});
test("takes an array of integers and should reuturn sum of 14 after adding 1 to each", () => {
  expect(addOneToEach([3, 0, 3, 10])).toBe(20);
});