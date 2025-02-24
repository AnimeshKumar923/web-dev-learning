const {
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index.js");

test("capitalize first character", () => {
  expect(capitalize("abc")).toMatch("Abc");
  expect(capitalize("XYZ")).toMatch("XYZ");
});

test("reverse a string", () => {
  expect(reverseStr("str")).toBe("rts");
  expect(reverseStr("abc")).toBe("cba");
  expect(reverseStr("")).toBe("");
});

test("calculator functionality", () => {
  expect(calculator().add(2, 3)).toBe(5);
  expect(calculator().subtract(2, 3)).toBe(-1);
  expect(calculator().multiply(2, 3)).toBe(6);
  expect(calculator().divide(2, 3)).toBeCloseTo(0.667, 3);
});

test("caesarCipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
