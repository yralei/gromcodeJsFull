const getSection = (num) => {
  const spanElem = document.querySelector(`span[data-number='${num}']`);
  const parenEl = spanElem.closest('.box');
  return parenEl.dataset.section;
};
