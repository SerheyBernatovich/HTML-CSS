function reverseString(str) {
  if (typeof str !== 'string') {
    return null;
  }
  return [...str].reverse().join('');
}

console.log(reverseString('asdfg'));
