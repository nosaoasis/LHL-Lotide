const tail = (arr) => {
  if (arr.length < 1 || !Array.isArray(arr)) return undefined;
  const newArr = arr.slice(1)
  console.log(newArr)
  console.log(arr, newArr)
  return newArr
}

module.exports = { tail };
