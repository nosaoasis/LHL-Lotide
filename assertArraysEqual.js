const {eqArrays} = require("./eqArrays")

const assertArraysEqual = (arry1, arry2) => {
  const isEqualArray = eqArrays(arry1, arry2)
  if (!isEqualArray) {
    console.log(`🛑🛑🛑 The array ${arry1} is not equal to ${arry2}`)
  } else {
    console.log(`✅✅✅ The array ${arry1} is equal to ${arry2}`)
  }
}

module.exports = {assertArraysEqual}
