const head = (arr) => {
  if (arr.length < 1 || !Array.isArray(arr)) return undefined;
  return arr[0];
};

module.exports = { head };
