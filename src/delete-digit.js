const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let numClone;
  let cloneArr;
  let max = 0;
  let arr = [...String(n)]
  for(let i = 0; arr.length > i; i++) {
      cloneArr = [...arr]
      delete cloneArr[i]
      numClone = Number(cloneArr.join(''))
      if(numClone > max) {
          max = numClone
      }
  }
  return max;
}

module.exports = {
  deleteDigit
};
