export default array => {
  if (!Array.isArray(array) || !array[0]) {
    return null;
  }
  let min = Infinity;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] * array[i] < min) {
      min = array[i] * array[i];
    }
  }
  return min;
};

console.log([-77, 3, 4, 9]);
