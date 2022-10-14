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
function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 2**disksNumber - 1;
  let sec = Math.floor(turn/(turnsSpeed/3600));
  let obj = {};
  obj.turns = turn;
  obj.seconds = sec;
  return obj;
}

module.exports = {
  calculateHanoi
};



// function calculateHanoi(disksNumber, turnsSpeed) {
//   let turn = 2**disksNumber - 1;
//   let sec = Math.floor(turn/(turnsSpeed/3600));
//   let obj = {};
//   obj.turns = turn;
//   obj.seconds = sec;
//   console.log(obj)
// }

// calculateHanoi(9, 4347);