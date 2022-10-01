import number from "./number.js";

const grid = {
  gridElement: document.getElementsByClassName("grid")[0],
  cells: [],
  playable: false,

  init: function () {
    const cellElements = document.getElementsByClassName("cell");
    let cellIndex = 1;
    for (let CellElement of cellElements) {
      grid.cells[cellIndex] = {
        element: CellElement,
        top: cellElements.offsetTop,
        left: cellElements.offsetLeft,
        number: null,
      };
      cellIndex++;
    }

    number.spawn();
    this.playable = true;
  },
  randomEmptyCellIndex: function () {
    let emptyCells = [];

    for (let i = 1; i < this.cells.length; i++) {
      if (this.cells[i].number === null) {
        emptyCells.push(i);
      }
    }
    if (emptyCells.length === 0) {
      //game over
      return false;
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  },
};

export default grid;
