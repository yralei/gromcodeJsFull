export const shmoment = (date) => {
  let newDate = new Date(date);

  const calculator = {
    add(period, value) {
      const result = {
        milliseconds: (value) =>
          newDate.setMilliseconds(newDate.getMilliseconds() + value),
        seconds: (value) => newDate.setSeconds(newDate.getSeconds() + value),
        minutes: (value) => newDate.setMinutes(newDate.getMinutes() + value),
        hours: (value) => newDate.setHours(newDate.getHours() + value),
        days: (value) => newDate.setDate(newDate.getDate() + value),
        months: (value) => newDate.setMonth(newDate.getMonth() + value),
        years: (value) => newDate.setFullYear(newDate.getFullYear() + value),
      };
      newDate = new Date(result[period](value));
      return calculator;
    },

    subtract(period, value) {
      const result = {
        milliseconds: (value) =>
          newDate.setMilliseconds(newDate.getMilliseconds() - value),
        seconds: (value) => newDate.setSeconds(newDate.getSeconds() - value),
        minutes: (value) => newDate.setMinutes(newDate.getMinutes() - value),
        hours: (value) => newDate.setHours(newDate.getHours() - value),
        days: (value) => newDate.setDate(newDate.getDate() - value),
        months: (value) => newDate.setMonth(newDate.getMonth() - value),
        years: (value) => newDate.setFullYear(newDate.getFullYear() - value),
      };
      newDate = new Date(result[period](value));
      return calculator;
    },

    result() {
      return newDate;
    },
  };
  return calculator;
};

// const res = shmoment(new Date(2020, 10, 4, 0, 0, 0, 0))
//   .add('years', 11)
//   .subtract('years', 2)
//   .add('months', 6)
//   .subtract('months', 2)
//   .add('hours', 5)
//   .subtract('hours', 1)
//   .add('minutes', 10)
//   .subtract('minutes', 30)
//   .add('milliseconds', 10000)
//   .add('milliseconds', 5000)
//   .subtract('seconds', 30)
//   .result();
// console.log(res);
