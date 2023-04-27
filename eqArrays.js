const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false 
  for (let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if(!eqArrays(arr1[i], arr2[i])) return false
    } else if (arr1[i] !== arr2[i] || typeof(arr1[i]) !== typeof(arr2[i])) {
      return false
    }
  }
  return true
}

module.exports = { eqArrays };
