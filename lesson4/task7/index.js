let sum = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log('Found');
    sum += i;
  }
}
let result = sum * 5 > 5000 ? 'Bigger' : 'Smaller or equal';
console.log(result);
