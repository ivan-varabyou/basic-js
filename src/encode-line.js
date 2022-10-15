const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  const strMap = [];
  let strArr = [...str];
  let count = 1, currentLitter, prevLitter;
  for(let i = 0; i < strArr.length; i++) {
      currentLitter = strArr[i]
      if(currentLitter == prevLitter) {
          ++count
          delete strMap[i-1];
          strMap.push(count+''+strArr[i]);
      } else {
          count = 1;
          strMap.push(strArr[i]);
      }
      prevLitter = strArr[i]
  }
  return strMap.join('');
}

module.exports = {
  encodeLine
};
