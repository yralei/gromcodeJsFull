const singleUseBtn = document.querySelector('.single-use-btn');
const singleUseBtnFunc = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', singleUseBtnFunc);
};
singleUseBtn.addEventListener('click', singleUseBtnFunc);
