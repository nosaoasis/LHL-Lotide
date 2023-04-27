const {tail} = require("../tail")

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result.length, 2); // ensure we get back two elements
console.log(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
console.log(result[1], "Labs"); // ensure second element is "Labs"
