const strArr = process.argv.slice(2)

const reverse = (str) => {
  let returnVal = ""
  for (let i = str.length - 1; i >= 0; i--) {
    returnVal += str[i]
  }
  return returnVal
}

// ensuring that the user enter data into the function aside from the command to run the file/application.
if (strArr.length < 1) {
  console.log(1)
}

strArr.forEach(item => {
  const reversedStr = reverse(item)
  console.log(reversedStr)
})