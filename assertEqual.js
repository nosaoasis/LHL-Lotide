const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};


module.exports = { assertEqual };
