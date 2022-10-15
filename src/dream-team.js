const { NotImplementedError } = require('../extensions/index.js');


/// ++++++++++ DONE ++++++++++++++++

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'lily', 'Oscar', true, null]) => 'LOO'
 *
 */
console.log (createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]) === 'ADGJKMNPRSTW')

function createDreamTeam(members) {
  if(!members) return false;
  let arr = [];
  for(let i=0; i <members.length; i++ )  {
    if(typeof members[i] === 'string') {
      arr.push(members[i].trim().slice(0,1).toUpperCase())
    }
  }
  return arr.sort().join('')
}

module.exports = {
  createDreamTeam
};
