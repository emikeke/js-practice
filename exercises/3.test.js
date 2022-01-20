const clockAngle = require("./3.js");

test("return 90 degree angle formed by the 15 minute hand on the clock", () => {
  expect(clockAngle(15)).toBe(90);
});
test("return 30 degree angle formed by the minute hand on the clock", () => {
  expect(clockAngle(5)).toBe(30);
});
test("return 180 degree angle formed by the minute hand on the clock", () => {
  expect(clockAngle(30)).toBe(180);
});
test("return 360 degree angle formed by the minute hand on the clock", () => {
  expect(clockAngle(60)).toBe(360);
});