const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let arr of matrix) {
    result.push(arr.slice())
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      let counter = 0;

      if (i - 1 >= 0) {
        let top = matrix[i - 1].slice((x - 1 >= 0 ? x - 1 : x), x + 2);
        top.forEach(checkTrue)
      }
      if (i + 1 < matrix.length) {
        let bottom = matrix[i + 1].slice((x - 1 >= 0 ? x - 1 : x), x + 2);
        bottom.forEach(checkTrue)
      }

      let right = matrix[i][x + 1];
      checkTrue(right)

      let left = matrix[i][x - 1];
      checkTrue(left)

      result[i][x] = counter;

      function checkTrue(elem) {
        if (elem === true) {
          counter++
        }
      }
    }
  }
  return result
}

module.exports = {
  minesweeper
};
