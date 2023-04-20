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

const letterPositions = arr => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] && arr[i] !== " ") {
      result = { ...result, [arr[i]]: [...result[arr[i]], i] };
    } else {
      result = { ...result, [arr[i]]: [i] };
    }
  }
  return result;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]))
