const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/// ++++++++++ DONE ++++++++++++++++

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

//  console.log(dateSample('1'));// => 22387
//  console.log(dateSample('WOOT!'));// => false
// console.log(dateSample(3.312312));
function dateSample(sampleActivity) {
  if ((typeof sampleActivity || isNaN(+sampleActivity)) !== 'string') return false;

  let years = Math.ceil((Math.log (MODERN_ACTIVITY / (+sampleActivity)) * HALF_LIFE_PERIOD) / 0.693);

  if(isNaN(years) || years < 0 || years === Infinity || years === -Infinity) return false

  return years;

}

module.exports = {
  dateSample
};
