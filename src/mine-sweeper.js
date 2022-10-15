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
 let matrix =  [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]
//  let matrix2 = [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// [1, 0, 0],
// [0, 1, 0],
// [0, 0, 0]

// [1, 2, 1], [2, 1, 1], [1, 1, 1]
// [1, 0, 0], [0, 1, 0], [0, 0, 0]

console.log(minesweeper(matrix))
function minesweeper(matrix) {
  const row = matrix[0].map(e => 0)
  const result = []
  matrix.forEach(e =>result.push([...row]))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        let condition = [
          [i-1 , j-1],  [i-1 , j  ],  [i-1 , j+1],
          [i   , j-1],                [i   , j+1],
          [i+1 , j-1],  [i+1 , j  ],  [i+1 , j+1]
        ];
        condition.forEach((e) => {
          if(e[0] >= 0 && e[0] <= matrix.length && e[1] >= 0 && e[1] <= matrix[0].length) {
            result[e[0]][e[1]]++;
          }
        })
      }
    }

  }
  return result
}

module.exports = {
  minesweeper
};
