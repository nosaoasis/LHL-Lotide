const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  // if (actual === expected) {
  //   return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  // }
  // return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
}

const tail = (arr) => {
  if (arr.length < 1 || !Array.isArray(arr)) return undefined;
  const newArr = arr.slice(1)
  console.log(newArr)
  console.log(arr, newArr)
  return newArr
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"))
// console.log(assertEqual(1, 1))