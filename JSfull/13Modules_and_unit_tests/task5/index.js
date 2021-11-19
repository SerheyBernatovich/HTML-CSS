/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable default-case */
export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = arr.slice();
  return resultArr.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const clientsIndex = clients.indexOf(client);
  if (balances[clientsIndex] - amount >= 0) {
    balances[clientsIndex] = balances[clientsIndex] - amount;
    console.log(balances);

    return balances[clientsIndex];
  }

  return -1;
};
export const getAdults = obj => {
  const newObj = {};
  for (const age in obj) {
    if (obj[age] >= 18) {
      newObj[age] = obj[age];
    }
  }
  return newObj;
};
