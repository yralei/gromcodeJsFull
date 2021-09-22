const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDealy = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDealy);
  });

const servers = [
  'https://server.com/us',
  'https://server.com/au',
  'https://server.com/eu',
];

export const getUserASAP = (userId) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/${userId}`);
  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};
getUserASAP('user-id-1').then((res) => console.log(res));
