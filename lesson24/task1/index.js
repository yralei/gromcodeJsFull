const dayOfWeekArr = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
function getdayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return dayOfWeekArr[new Date(dayInFuture).getDay()];
}
const result = getdayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
