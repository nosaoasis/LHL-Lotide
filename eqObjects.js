const assertEqual = (actual, expected) => {
  console.assert(actual === expected);
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || typeof arr1[i] !== typeof arr2[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

const isObject = function(val) {
  return (typeof val === "object" && !Array.isArray(val));
};


const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }

  for (let variables of Object.keys(obj1)) {
    if (Array.isArray(obj1[variables]) && Array.isArray(obj2[variables])) {
      if (!eqArrays(obj1[variables], obj2[variables])) {
        return false;
      }
    } else if (isObject(obj1[variables]) && isObject(obj2[variables])) {
      if (!eqObjects(obj1[variables], obj2[variables])) {
        return false;
      }
    } else if (obj1[variables] !== obj2[variables]) {
      return false;
    }
  }

  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
