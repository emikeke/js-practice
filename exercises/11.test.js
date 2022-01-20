const enqueue = require("./11.js");
const dequeue = require("./11.js");

test("enqueue should return [1, 2, 3, 4]", () => {
  expect(enqueue([1, 2, 3, 4])).toEqual(1, 2, 3, 4);
});
test("dequeue should return 1 when enqueue is [1, 2, 3, 4]", () => {
  expect(dequeue([1, 2, 3, 4])).toBe(1);
});
test("dequeue should return 0 when stack1 is []", () => {
  expect(dequeue([0])).toBe(0);
});
test("dequeue should return 0 when stack2 is []", () => {
  expect(dequeue([0])).toBe(0);
});