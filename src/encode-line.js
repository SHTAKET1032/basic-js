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
  let newVar = '';
  let repeat = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
      repeat++;
    } else {
      if (repeat == 1) {
        newVar = newVar + arr[i];
      } else {
        newVar = newVar + repeat + arr[i];
        repeat = 1;
      }
    }
  }
  return newVar;
}


module.exports = {
  encodeLine
};



// let str = 'aaaattttfd';

// let arr = str.split('');
// let newVar = '';
// let repeat = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == arr[i+1]) {
//     repeat++;
//   } else {
//     if (repeat == 1) {
//       newVar = newVar + arr[i];
//       repeat = 1;
//     } else {
//       newVar = newVar + repeat + arr[i];
//       repeat = 1;
//     }
//   }
//   return newVar;
// }







