function withdraw(clients, balances, client, amount) {
  let result = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (client === clients[i]) {
      if (balances[i] >= amount) {
        result = balances[i] - amount;
      } else {
        result = -1;
      }
    }
  }
  return result;
}

// function withdraw(clients, balances, client, amount) {
//   const clientsIndex = clients.indexOf(client);
//   if (balances[clientsIndex] - amount >= 0) {
//     return balances[clientsIndex] - amount;
//   }
//   return -1;
// }

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//37 [1400,37,-6]
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//-1 [1400,87,-6]
