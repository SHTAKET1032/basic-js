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

  let arr = str.split('');

  let map = arr.reduce((acc, value) => {
    acc[value] = acc[value] ? acc[value] + 1 : 1;
    return acc;
  }, {});

  let newVar = '';
  for(let key in map) {
  newVar += (map[key]+key);
  }
return newVar;
}

module.exports = {
  encodeLine
};





// let arr = str.split('');

// let map = arr.reduce((acc, value) => {
//   acc[value] = acc[value] ? acc[value] + 1 : 1;
//   return acc;
// }, {});

// let newVar = '';
// for(let key in map) {
// newVar += (map[key]+key);

// }
// return newVar;


