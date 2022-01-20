const reverseString = require("./10.js");

test("", () => {
  expect(reverseString("Welcome to this Javascript Guide!")).toBe("!ediuG tpircsavaJ siht ot emocleW");
});

test("", () => {
  expect(reverseString("hello")).toBe("olleh");
});