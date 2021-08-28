export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

export const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000));

export const getAdults = (obj) => {
  let res = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }

  return res;
};
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }));
