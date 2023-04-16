const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const head = (arr) => {
  if (arr.length < 1 || !Array.isArray(arr)) return undefined;
  return arr[0];
};

// head function assert test cases
// ===============================
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
