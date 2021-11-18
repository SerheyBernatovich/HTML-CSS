const withdraw = (clients, balances, client, amount) => {
  const clientsIndex = clients.indexOf(client);
  if (balances[clientsIndex] - amount >= 0) {
    balances[clientsIndex] = balances[clientsIndex] - amount;
    console.log(balances);

    return balances[clientsIndex];
  }

  return -1;
};

//example 1:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]
