const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * [ 0,  1 ,  2 ,  3 ,  4,  5,  6 ,  7 ]
 * [-1, 150, 190, 170, -1, -1, 160, 180]
 * [ 0,  1 ,  1 ,  1 ,  0,  0,  1 ,  1 ]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

console.log(sortByHeight([4, 2, 9, 11, 2, 16]), '[2, 2, 4, 9, 11, 16]')
function sortByHeight(arr) {
  const result = [], heightForSort = [], statusSort = []
  arr.forEach(e => (e != -1) && heightForSort.push(e))
  heightForSort.sort((a,b) => a - b)

  arr.forEach((value, index) => {
    let val;
    if(value == -1) {
      result.push(value)
    } else {
      result.push(heightForSort.shift())
    }
  })

  return result;
}

module.exports = {
  sortByHeight
};
