const createLogger = () => {
  const memory = [];

  function warn(warnMessage) {
    return memory.push({
      message: warnMessage,
      type: 'warn',
      dateTime: new Date(),
    });
  }

  function error(errorMessage) {
    return memory.push({
      message: errorMessage,
      type: 'error',
      dateTime: new Date(),
    });
  }

  function log(logMessage) {
    return memory.push({
      message: logMessage,
      type: 'log',
      dateTime: new Date(),
    });
  }
  function getRecords(typeOfMessage) {
    return typeOfMessage === undefined
      ? memory.sort((el1, el2) => el2.dateTime - el1.dateTime)
      : memory
          .filter((el) => el.type === typeOfMessage)
          .sort((el1, el2) => el2.dateTime - el1.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.log('User logged in');
logger.log('User logged out');
logger.log('User logged in');
logger.error('Unexpected error on the site');
logger.error('Unexpected error on the site1');
logger.error('Unexpected error on the site2');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page2');
logger.warn('User try to restricted page3');
console.log(logger.getRecords());

// logger.log('User logged in');
// console.log(logger.log('User logged in'));

// console.log(logger.log('User logged out'));
// console.log(logger.error('Unexpected error on the site'));
// console.log(warn('User try to restricted page'))
// console.log(logger.log('User logged out'));

// function getRecords(typeOfMessage) {
//   let res = [];
//   if (typeOfMessage === 'warn') {
//     res = memory;
//   } else if (typeOfMessage === 'error') {
//     res = memory;
//   } else if (typeOfMessage === 'log') {
//     res = memory;
//   }
//   return res;
// }
