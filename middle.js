const middle = arr => {
  if (arr.length <= 2) return []
  
  if (arr.length % 2 == 1) return [arr[Math.floor(arr.length / 2)]];
  
  if (arr.length % 2 == 0) return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

module.exports = {middle}




console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))