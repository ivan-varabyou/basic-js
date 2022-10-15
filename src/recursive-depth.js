const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


 class DepthCalculator {
  calculateDepth(arr) {
          let i = 0; let count = 1;
          while (arr.length > i) {
              let rCounter = 1;
              if(Array.isArray(arr[i])) {
                  rCounter = rCounter + this.calculateDepth(arr[i])
              }
              i++;
              if(rCounter > count) {
                  count = rCounter
              }
          }

          return count;
  }
}


//  class DepthCalculator {
//       calculateDepth(arr) {
//         let acc, count = 1;
//         arr.forEach((ar) => {
//             acc = 1;
//             if (Array.isArray(ar)) {
//                 acc = acc + this.calculateDepth(ar);
//             }
//             if (acc > count) {
//                 count = acc;
//             }
//         })
//         return count;
//       }
// }

module.exports = {
  DepthCalculator
};


// const depthCalc = new DepthCalculator();
//  console.log(depthCalc)
//  console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]) , 1)
//  console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]) , 2)
//  console.log(depthCalc.calculateDepth([[[]]]),  3)
