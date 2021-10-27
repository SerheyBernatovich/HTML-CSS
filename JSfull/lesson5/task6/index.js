function increaser(a, index) {
  let rezalt = 0;
  if (a > index) {
    rezalt = a + index;
  } else {
    return a;
  }
  return rezalt;
}
console.log(increaser(2, 5));
