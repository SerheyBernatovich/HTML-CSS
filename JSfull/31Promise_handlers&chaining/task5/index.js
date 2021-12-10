export const delay = time => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
  return p;
};

delay(3000).then(() => console.log('Done'));
