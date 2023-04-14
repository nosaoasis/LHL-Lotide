const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
}

console.log(assertEqual("Lighthouse Labs", "Bootcamp"))
console.log(assertEqual(1, 1))