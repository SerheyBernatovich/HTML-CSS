function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, num) => acc + num) / arr.length;
}

console.log(arrAverage([5, 6, 3, 2]));
