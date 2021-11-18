const countOccurrences = (text = '', str) => {
  let count = 0;
  let pos = text.indexOf(str);
  while (pos !== -1) {
    pos = text.indexOf(str, pos + 1);
    count += 1;
  }
  return count;
};

console.log(countOccurrences('fesefessfefefddss', 's'));
