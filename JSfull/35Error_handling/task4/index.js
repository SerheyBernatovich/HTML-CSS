export function parseUser(jsObj) {
  try {
    return JSON.parse(jsObj);
  } catch {
    return null;
  }
}
const jsObj1 = { name: 'Tom' };
console.group(jsObj1);
const jsObj2 = JSON.stringify({ name: 'Tom' });
console.log(jsObj2);
console.log(parseUser(jsObj1));
console.log(parseUser(jsObj2));
