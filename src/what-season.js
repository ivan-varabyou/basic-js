const { NotImplementedError } = require('../extensions/index.js');


/// ++++++++++ DONE ++++++++++++++++

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

// console.log(getSeason(getSeason()), 'Unable to determine the time of year!')

// console.log(getSeason(Object.getPrototypeOf(new Date())) === 'Invalid date!')
// console.log(getSeason({ John: 'Smith' }))
// console.log(getSeason(20192701))
// console.log(getSeason([2019, '27', 0 + '1']))
// console.log(getSeason(() => new Date()))


function getSeason(date) {
  let season = false;
  if(!date) return 'Unable to determine the time of year!'
  if(!(date instanceof Date) || (Object.getOwnPropertyNames(date).length > 0)) {throw Error('Invalid date!')}
  const month = date.getMonth()
  if(month == 11 || month <= 1) {
    season = 'winter'
  } else if(month <= 4) {
    season = 'spring'
  } else if(month <= 7) {
    season = 'summer'
  } else if(month <= 10) {
    season = 'autumn (fall)'
  }
  return season;
}

module.exports = {
  getSeason
};
