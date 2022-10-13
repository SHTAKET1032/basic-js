const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} S1
 * @param {String} S2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(S1, S2) {

  let arrS1 = S1.split('');
  let arrS2 = S2.split('');
  let result = [];

  let map = arrS1.reduce((acc, i) => {
      acc[i] = acc[i] ? acc[i] + 1 : 1;
      return acc
  }, {});
  
  for(let i = 0; i < arrS2.length; i++ ) {
    const current = arrS2[i];
    let count = map[current];

    if (count && count > 0) {
      result.push(current);
      map[current] -=1;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};


// let S1 = 'd';
// let S2 = 'zzzzzzzzzz';

//   let arrS1 = S1.split('');
//   let arrS2 = S2.split('');

//   let result = [];

//   let map = arrS1.reduce((acc, i) => {
//       acc[i] = acc[i] ? acc[i] + 1 : 1;
//       return acc
//   }, {});
  
//   for(let i = 0; i < arrS2.length; i++ ) {
//     const current = arrS2[i];
//     let count = map[current];

//     if (count && count > 0) {
//       result.push(current);
//       map[current] -=1;
//     }
//   }

  

//   console.log(result.length);



