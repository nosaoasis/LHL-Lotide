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

const middle = arr => {
  if (arr.length <= 2) return []

  if (arr.length % 2 == 1) return [arr[Math.floor(arr.length / 2)]];

  if (arr.length % 2 == 0) return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};



console.log(assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true))
console.log(assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [2, 3]), [4, 3]))