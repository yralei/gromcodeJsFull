function findDivCount(a, b, n) {
  let res = 0;
  for (a; a <= b; a++) {
    if (a % n === 0) {
      res += 1;
    }
  }
  return res;
}
console.log(findDivCount(1, 10000, 33));
