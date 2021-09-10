export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate).getTime();

  const end = new Date(endDate).getTime();
  const diff = Math.abs(start - end);
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / oneDay);
  const oneHour = 1000 * 60 * 60;
  const hours = Math.floor((diff - days * oneDay) / oneHour);
  const oneMinute = 1000 * 60;
  const minutes = Math.floor(
    (diff - days * oneDay - hours * oneHour) / oneMinute
  );
  const seconds = Math.floor(
    (diff - days * oneDay - hours * oneHour - minutes * oneMinute) / 1000
  );
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
