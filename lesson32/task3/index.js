/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = () => {
  return Promise.resolve(value);
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
