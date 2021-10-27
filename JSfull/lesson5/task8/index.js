function findDivCount(a, b, n) {
  let rezalt = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      rezalt += 1;
    }
  }
  return rezalt;
}
console.log(findDivCount(3, 6, 3));
