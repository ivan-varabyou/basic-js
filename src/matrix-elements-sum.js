const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

 let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]

console.log(getMatrixElementsSum(matrix))


function getMatrixElementsSum(matrix) {
  let total = 0;
  const mapMatrix = new Array(matrix[0].length).fill(true);
  for(let i=0; i < matrix.length; i++) {
    for(let j=0; j < matrix[i].length; j++) {
      if(matrix[i][j] == 0) {
        mapMatrix[j] = false;
      }
      if(mapMatrix[j]) {

        total += matrix[i][j];
      }
    }
  }
  return total
}
module.exports = {
  getMatrixElementsSum
};
