export const squaredNumbers = () => {
  const squareNum = document.querySelectorAll('.number');
  const arrayOfItems = Array.from(squareNum);
  // eslint-disable-next-line no-return-assign
  arrayOfItems.map(
    // eslint-disable-next-line no-return-assign
    (item) => (item.dataset.squaredNumber = item.dataset.number ** 2)
  );
};
// squaredNumbers();
