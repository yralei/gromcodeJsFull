function sum(from, to) {
  let res = 0;
  for (from; from <= to; from++) {
    res += from;
  }
  return res;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}
console.log(compareSums(1, 9, 3, 4));
