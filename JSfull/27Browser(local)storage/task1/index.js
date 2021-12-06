localStorage.setItem('nUUmber', JSON.stringify(42));
localStorage.setItem('string', JSON.stringify('SString'));
localStorage.setItem('NULL', JSON.stringify(null));
localStorage.setItem('obj', JSON.stringify({ name: 'Naame' }));
export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, val]) => {
    let newVAlue;
    try {
      newVAlue = JSON.parse(val);
    } catch (e) {
      newVAlue = val;
    }
    return {
      ...acc,
      [key]: newVAlue,
    };
  }, {});

console.log(getLocalStorageData());
