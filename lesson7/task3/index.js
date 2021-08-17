const flatArray = (arr) => {
  const flatArray = arr.slice().reduce((acc, el) => {
    return acc.concat(el).sort((a, b) => a - b);
  }, []);
  return flatArray;
};
const arr = [4, 7, 8, [90, 65, 31], 4, 9, [32, 77]];
console.log(flatArray(arr));
