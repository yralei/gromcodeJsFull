const generatorOfNumbers = (from, to) => {
  const res = [];
  for (let index = from; index <= to; index += 1) {
    res.push(index);
  }
  return res;
};

const setSectorSeats = () =>
  generatorOfNumbers(1, 10)
    .map(
      (seatNumber) =>
        `<div class='sector__seat' data-seat-number='${seatNumber}'></div>`
    )
    .join('');
// console.log(setSectorLines());
const setSectorLines = () => {
  const seatsString = setSectorSeats();
  return generatorOfNumbers(1, 10)
    .map(
      (lineNumber) =>
        `<div class='sector__line' data-line-number='${lineNumber}'>${seatsString}</div>`
    )
    .join('');
};
// console.log(setSectorLines());

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = setSectorLines();
  const sectorsString = generatorOfNumbers(1, 3)
    .map(
      (sectorNumber) =>
        `<div class='sector' data-sector-number='${sectorNumber}'>${linesString}</div>`
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElement = document.querySelector('.board__selected-seat');
  selectedSeatElement.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
renderArena();
