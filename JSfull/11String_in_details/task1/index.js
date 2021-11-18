function splitString(string, num = 10) {
  const arr = [];
  let start = 0;
  if (typeof string !== 'string') {
    return null;
  }
  while (true) {
    const chuk = string.substr(start, num);
    if (chuk.length === 0) {
      break;
    }
    arr.push(chuk);
    start += num;
  }
  return arr;
}

console.log(splitString('sssssssdfdsf'));
console.log(splitString('sssssssdfdsf', 4));
console.log(splitString(99, 4));
