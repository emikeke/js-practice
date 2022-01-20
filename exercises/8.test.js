const stringRotation = require("./8.js");

test("should be false for ACBD", () => {
  expect(stringRotation("ABCD", "ACBD")).toBe(false);
});
test("should be truw for ACBD", () => {
  expect(stringRotation("ABCD", "DABC")).toBe(true);
});