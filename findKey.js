const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
}

const findKey = (obj, callback) => {
  let returnedKey = undefined;
  for (const key in obj) {
    if (callback(obj[key])) {
      returnedKey = key;
      break;
    }
  }
  return returnedKey;
};

const findingKey = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
); // => "noma"

console.log("the lost key is ", findingKey);
console.log(assertEqual(findingKey, "noma"));
