const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
// console.log(getItemsList());

const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);
  return elementsArray;
};
// console.log(getItemsArray());
