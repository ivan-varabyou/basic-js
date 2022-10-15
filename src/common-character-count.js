const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let left = [...s2]; // a d c a
  let right = [...s1]; // a a b c c
  if([...s2] >= [...s1]) {
      left = [...s1]; // a a b c c
      right = [...s2]; // a d c a
  }
  let index, set = [];
  for(let i=0; i < left.length; i++) {
      index = right.indexOf(left[i])
      if(index >= 0) {
          set.push(right[index])
          delete right[index]
      }
  }
  return set.length
}

module.exports = {
  getCommonCharacterCount
};
