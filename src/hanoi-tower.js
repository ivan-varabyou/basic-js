const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
// diskNumberи  -> количество дисков (9)
// turnsSpee -> скорость движения дисков (в оборотах в час ) (4308)


//return calculateHanoi(9, 4308)=>{ turns: 511, seconds: 427 }
// turns - минимум  ходов для решения головоломки -> turns: 511
// seconds - минимум секунд number для решения головоломки при заданном  > seconds: 427
// -- секунды должны быть целым числом,
// -- полученным из округленного в меньшую сторону (минимального) результата вычисления

// Discord: calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }   ===== 511/4308 * 60 * 60 = 427

//  calculateHanoi(3, 2571)  // => { turns: 7, seconds: 5 } ===== 7/x * 60 * 60 = 5


// console.log(calculateHanoi(3, 2571), '{ turns: 7, seconds: 9 }')

function calculateHanoi(disksNumber, turnsSpeed) {
  const total = {}
  let rez;
  total.turns = stepHanoi(disksNumber);
  total.seconds = Math.floor((total.turns * 60 * 60) / turnsSpeed);
  return total;
  function stepHanoi(disk) {
    if(disk == 1) {
      return 1;
    } else {
      rez = ((stepHanoi(disk -1) * 2) + 1);
      return rez
    }
  }
}

module.exports = {
  calculateHanoi
};
