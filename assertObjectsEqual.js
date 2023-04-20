const inspect = require('util').inspect;

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

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }

  let returnedValue;

  for (let variables of Object.keys(obj1)) {
    if (Array.isArray(obj1[variables]) && Array.isArray(obj2[variables])) {
      const eqArrVal = eqArrays(obj1[variables], obj2[variables]);
      if (!eqArrVal) {
        returnedValue = false;
      } else {
        returnedValue = true;
      }
    } else if (obj1[variables] !== obj2[variables]) {
      returnedValue = false;
    } else {
      returnedValue = true;
    }
  }

  return returnedValue;
};


const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }))
