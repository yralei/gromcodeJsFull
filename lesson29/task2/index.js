'use strict';

export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(23, 2000); // makes 7 writes with 1500 ms interval
// pinger(8, 1550);
// pinger(6, 3000);
// pinger(7, 4050);
// pinger(7, 3500);
// pinger(7, 1650);
