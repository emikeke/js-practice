const mul = require("./12.js");

test ("mul(2)(3)(4)) should be 24", () => {
  expect(mul(2)(3)(4)).toBe(24);
});
test ("mul(4)(3)(4)) should be 48", () => {
  expect(mul(4)(3)(4)).toBe(48);
});