// PSEUDOCODE
// get the input from the user
// ensure the input has value and the value is of the required datatype...
// using JS SyntaxError, convert the array of strings into one single sentence
// write the pigLatin function ===>
//  => create a variable that will hold the return value
// loop through the array of strings, append to the variable the head value and append it to the end of the string alomg with `ay`.

const inputArr = process.argv.slice(2)
console.log(inputArr)

// ensuring that the user enter data into the function aside from the command to run the file/application.
if (inputArr.length < 1) {
  console.log("An error occurred. Missing data input.")
  return
}


const pigLatin = sentence => {
  let pigWord = "";
  sentence.forEach(item => {
    pigWord += `${item.slice(1)}${item[0]}ay `;
  });
  
  return pigWord;
}

console.log(pigLatin(inputArr))
