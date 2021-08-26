const users = {
  Tom: 12,
  Dimitri: 35,
  Iurii: 25,
  Olga: 17,
};
//input: obj
//output: arr with filtered value
const getAdults = (usersObj) =>
  Object.entries(usersObj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);
console.log(getAdults(users));
