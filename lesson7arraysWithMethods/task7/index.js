function filterNames(arr, text) {
  const res = arr.filter((name) => name.length > 5);
  return res.filter((name) => name.indexOf(text) !== -1);
}

console.log(filterNames(['John', 'Nastya', 'Olivya', 'Georgey'], 'ya'));
