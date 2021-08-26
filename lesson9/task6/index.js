//input: obj
//output: arr strings
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
const getPeople = (obj) => {
  const arr = Object.values(obj);
  const flatArray = arr.slice().reduce((acc, el) => {
    return acc.concat(el)
  }, []);
  return flatArray.map(item => {
    return item['name']
  })
}
console.log(getPeople(rooms));



const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
const getPeople = (obj) => {
  const arr = Object.values(obj)
  const flatArray = arr.slice().reduce((acc, el) => {
    .map((item) => {
    return item['name'];
  });

};
console.log(getPeople(rooms));


const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
const getPeople = (obj) => {
    return Object.values(obj).flat().map(el => el.name);
}
console.log(getPeople(rooms));