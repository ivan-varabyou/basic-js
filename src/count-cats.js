const { NotImplementedError } = require('../extensions/index.js');

/// ++++++++++ DONE ++++++++++++++++

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(arr) {
  return []
            .concat(...arr)
            .filter(e => e == "^^")
            .length
}

module.exports = {
  countCats
};
