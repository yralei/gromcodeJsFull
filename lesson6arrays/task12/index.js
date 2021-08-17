function sortAsc(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAsc([3, 70, 44, 2, 9, 89]));

function sortDesc(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortDesc([3, 70, 44, 2, 9, 89]));
