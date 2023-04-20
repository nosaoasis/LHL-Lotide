const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const countOnly = (arr, obj) => {
  let returnedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    arr.forEach((item) => {
      if (item == key && value == true) {
        if (!returnedObj[key]) {
          returnedObj[key] = 1;
        } else {
          returnedObj[key] += 1;
        }
      }
    });
  });
  return returnedObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
