const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }
  if (typeof text === 'undefined') {
    text = '';
  }
  return text.toLocaleLowerCase().split(str).length - 1;
};
//console.log('Taras'.toLocaleLowerCase().split('a').length - 1)
console.log(countOccurrences(_, 'o'));
