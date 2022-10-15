const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 *
 *
 *
--discard-next -> исключает следующий элемент массива из преобразованного массива.
--discard-prev -> исключает предыдущий элемент массива из преобразованного массива.
--double-next -> дублирует следующий элемент массива в преобразованном массиве.
--double-prev -> дублирует предыдущий элемент массива в преобразованном массиве.

 */
// console.log(transform(0), 'Error')

// [1, 2, 3,   null,           null,           null, 4, 5]
// [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]

// console.log(transform([ 1, 2, 3, NaN, 4, 5 ]), '[ 1, 2, 3, NaN, 4, 5 ]')
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]), [1, 2, 3, 1337, 4, 5])

// ['--discard-prev', 1, 2, 3],
// ['--double-prev', 1, 2, 3],
// [1, 2, 3, '--double-next'],
// [1, 2, 3, '--discard-next']




function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if(!(arr instanceof Array)) throw Error(`'arr' parameter must be an instance of the Array!`)
  const arrCopy = [...arr]
  const command = ['--double-next','--discard-next','--double-prev','--discard-prev']
  // const newArray = arr.map((e) => isNaN(+e) ? null : e)
  const newArray = []
  console.log(newArray)

    for(let i=0; arrCopy.length > i; i++) {
      if(command.includes(arrCopy[i])) {
          if(arrCopy[i] == '--double-next') {
              if(!isNaN(+arrCopy[i+1])) newArray.push(arrCopy[i+1])
          }
          if(arrCopy[i] == '--discard-next') {
            if(!isNaN(+arrCopy[i+1])) arrCopy[i+1] = NaN
          }
          if(arrCopy[i] == '--double-prev') {
            if(!isNaN(+arrCopy[i-1])) newArray.push(arrCopy[i-1])
          }
          if(arrCopy[i] == '--discard-prev') {
            // console.log(!isNaN(+arrCopy[i-1]))
            if(!isNaN(+arrCopy[i-1])) newArray[i-1] = NaN
            // console.log(!isNaN(+arrCopy[i-1]))
          }
      } else {
        newArray.push(arrCopy[i])
      }
    }
  return newArray.filter(e => !isNaN(e) || typeof e == 'string' || typeof e == 'nimber'  || typeof e == 'boolean' || typeof e == 'object')
  }

module.exports = {
  transform
};
