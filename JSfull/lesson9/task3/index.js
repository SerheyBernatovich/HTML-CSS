const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

function getKeys(obj) {
  const key = Object.keys(obj);
  key.forEach((key) => {
    console.log(key);
  });
  //   console.log(key);
  //   const resalt = Object.entries(obj);
  //   resalt.forEach(([key, value]) => {
  //     console.log(key);
  //   });
  //   return key;
}
getKeys(obj);
