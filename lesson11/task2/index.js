const list = [
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Dom', phoneNumber: '777-77-77' },
  { name: 'Vom', phoneNumber: '777-77-77' },
  { name: 'Gom', phoneNumber: '777-77-77' },
  { name: 'Rom', phoneNumber: '777-77-77' },
];

const sortContacts = (arr, isAsc) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.sort((a, b) => {
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
  return res;
};
console.log(sortContacts(list, true));
