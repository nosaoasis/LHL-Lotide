const {assertArraysEqual} = require("../assertArraysEqual")
const {middle} = require("../middle")

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true)
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 3]), [4, 3])