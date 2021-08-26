function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
const obj = {
  tom: 12,
  jerry: 15,
};
console.log(getKeys(obj));
