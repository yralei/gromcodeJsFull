// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name', JSON.stringify('Nick'));
// localStorage.setItem('age', JSON.stringify(17));

export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: JSON.parse(value),
    }),
    {}
  );
// console.log(getLocalStorageData());
