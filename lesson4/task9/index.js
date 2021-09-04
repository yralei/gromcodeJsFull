let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
let div = sum % 1234;
let mods = Math.trunc(sum / 1234);
let result = mods > div ? true : false;
console.log(result);
