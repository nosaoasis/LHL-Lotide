const map = (arr, callback) => {
  console.log('array: ', arr);
  console.log('callback: ', callback);
  const results = []
  for (let item of arr) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item))
  }
  return results
}

const words = ['ground', 'control', 'to', 'major', 'tom']

const results1 = map(words, word => word[0]);
console.log(results1);