const start = 1;
const end = 55;
let result = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 === 0 && i % 4 !== 0 && i % 5 !== 0) {
    result += i;
  } else if (i % 3 === 0 && i % 5 !== 0) {
    result -= i;
  } else if (i % 4 === 0 && i % 5 !== 0) {
    result *= i;
  } else if (i % 5 === 0) {
    console.log(i);
  } else continue;
}
