function checker(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    sum += i;
  }
  if (sum > 1000) {
    return true;
  } else {
    return false;
  }
}

console.log(checker([800, 100, 300]));
console.log(checker(1, 2, 3));
