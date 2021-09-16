const delay = (timeOut) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeOut);
  });
  return p;
};
delay(3000).then(() => console.log('Done'));

// function delay(interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, interval);
//   });
// }
// delay(3000).then(() => console.log('Done'));
