export function getOwnProps(obj) {
  const arr = [];
  for (let i in obj) {
    if (typeof obj[i] !== 'function' && obj.hasOwnProperty(i)) {
      arr.push(i);
    }
  }
  return arr;
}
