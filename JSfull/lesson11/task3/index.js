function splitString(text, len = 10) {
  const strArr = [];
  let startPosition = 0;
  if (typeof text !== 'string') {
    return null;
  }
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += len;
  }

  // let lastElement = strArr[strArr.length - 1];

  while (strArr[strArr.length - 1].length < len) {
    strArr[strArr.length - 1] += '.';
  }

  // strArr[strArr.length - 1] = lastElement;

  return strArr;
}

console.log(splitString('wwwwwwwwws ssssssssssf ffffffffffg'));
console.log(splitString('ssssfffffffffffffffdsf', 4));
console.log(splitString(99, 4));
