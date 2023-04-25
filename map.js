const map = (arr, callback) => {
  const results = []
  for (let item of arr) {
    results.push(callback(item))
  }
  return results
}

const words = ['ground', 'control', 'to', 'major', 'tom']

const results1 = map(words, word => word[0]);
console.log(results1);