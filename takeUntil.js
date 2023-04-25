const assertArraysEqual = (arry1, arry2) => {
  const isEqualArray = eqArrays(arry1, arry2)
  if (!isEqualArray) {
    console.log(`🛑🛑🛑 The array ${arry1} is not equal to ${arry2}`)
  } else {
    console.log(`✅✅✅ The array ${arry1} is equal to ${arry2}`)
  }
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

const takeUtil = function(array, callback) {
  let returnedArray = [];

  for (const [index, num] of array.entries()) {
    if (!callback(num)) {
      returnedArray.push(array.slice(index, index + 1).pop());
    }
    if (callback(num)) {
      break;
    }
  }
  return returnedArray;
};

const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const words = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
console.log(takeUtil(numbers, x => x < 0));
console.log(takeUtil(words, x => x === ","));

console.log(assertArraysEqual([ 1, 2, 5, 7, 2 ], takeUtil(numbers, x => x < 0)))
console.log(assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ], takeUtil(words, x => x === ",")))
