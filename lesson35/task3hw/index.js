const json = `{ "user": "Iurii", "age": 31 }`;
export const parseUser = (json) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    return null;
  }
};
// console.log(parseUser(json));
