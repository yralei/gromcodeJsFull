export const dayOfWeek = (date, days) => {
  const dayOfWeekArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return dayOfWeekArr[new Date(dayInFuture).getDay()];
};
// const result = dayOfWeek(new Date(2019, 0, 1), 28);
// console.log(result);
