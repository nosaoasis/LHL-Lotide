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

console.log("111", eqArrays([1, 2, 3], [1, 2, 3]))
console.log("222", eqArrays([1, 2, 3], [3, 2, 1]))
console.log("333", eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log("444", eqArrays(["1", "2", "3"], ["1", "2", 3]))

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))

console.log(assertArraysEqual("Lighthouse Labs", "Bootcamp"))
console.log(assertArraysEqual(1, 1))