const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
}

const countLetters = arr => {
  let returnedCountLetters = {};
  for (let i = 0; i < arr.length; i++) {
    if (!returnedCountLetters[arr[i]]) {
      returnedCountLetters[arr[i]] = 1;
    } else {
      returnedCountLetters[arr[i]] += 1;
    }
  }
  return returnedCountLetters;
};

const letters = countLetters("Hello");

console.log(assertEqual(letters["H"], 1))
