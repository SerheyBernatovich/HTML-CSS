function getSum(first, second) {
  let sum = 0;
  for (let i = first; i <= second; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(getSum(2, 4));
