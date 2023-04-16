const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false 
  let isEqual = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || typeof(arr1[i]) !== typeof(arr2[i])) {
      isEqual = false
    }
  }
  return isEqual
}

console.log("111", eqArrays([1, 2, 3], [1, 2, 3]))
console.log("222", eqArrays([1, 2, 3], [3, 2, 1]))
console.log("333", eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log("444", eqArrays(["1", "2", "3"], ["1", "2", 3]))

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))