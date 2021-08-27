'use strict';

const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    const clientBalance = balances[clientIndex] - amount;
    return clientBalance;
  }
  return -1;
};
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//output
//example 1:

//input

//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input

//output
//-1
//и массив balances должен быть [1400, 87, -6]
