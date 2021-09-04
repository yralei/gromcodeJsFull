export const createArrayOfFunctions = (len) => {
  const resArr = [];

  if (len === undefined) {
    return resArr;
  }
  if (typeof len !== 'number') {
    return null;
  }

  for (let i = 0; i < len; i += 1) {
    resArr[i] = function () {
      return i;
    };
  }
  return resArr;
};

console.log(createArrayOfFunctions(9)[5]());
