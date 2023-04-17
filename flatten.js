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

let returnedArr = [];

const flattenArr = item => {
  item.forEach(element => {
    returnedArr = [...returnedArr, element];
  });
  return returnedArr;
};

const flatten = arr => {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      returnedArr = [...returnedArr, item];
    }
  });
  console.log("flat", returnedArr)
  return returnedArr;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]))
