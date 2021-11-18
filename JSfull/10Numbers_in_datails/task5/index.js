function getTotalPrice(arr) {
  let sum = 0;
  arr.reduce((acc, num) => {
    sum = acc + num;

    return sum;
  }, 0);
  return '$' + Math.floor(sum * 100) / 100;
}
console.log(getTotalPrice([1, 2, 3.157, 4.159]));
