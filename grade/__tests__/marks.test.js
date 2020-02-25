const mark = require("../index");

test("marks is a number", () => {
  expect(typeof mark.marks).toBe("number");
});

test("mark is valid", () => {
  expect(mark.isValidate()).toBe(true);
});

test("mark is A", () => {
  expect(mark.computeScore()).toBe("A");
});
