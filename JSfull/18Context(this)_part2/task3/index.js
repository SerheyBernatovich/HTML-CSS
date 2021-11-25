export function sumOfSquares() {
  return [...arguments].reduce((acc, ell) => {
    return acc + ell * ell;
  }, 0);
}
console.log(sumOfSquares(1, 2, 3));
