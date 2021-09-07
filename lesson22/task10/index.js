const paginationPage = document.querySelectorAll('.pagination__page');
const paginationPageArr = Array.from(paginationPage);
const handleClick = (event) => {
  const dataPageNum = event.target.dataset.pageNumber;
  console.log(dataPageNum);
};
const result = paginationPageArr.map((btn) =>
  btn.addEventListener('click', handleClick)
);
paginationPageArr[0].addEventListener('click', handleClick);
