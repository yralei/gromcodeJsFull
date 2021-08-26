const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];
const getTotalRevenue = (transactions) => {
  return transactions
    .map((el) => el.amount)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);
};
console.log(getTotalRevenue(dayTransactions));

// examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310
