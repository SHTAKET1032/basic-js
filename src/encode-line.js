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
  newVar += ([key]+map[key]);
  }
return newVar;
}


module.exports = {
  encodeLine
};



// let str = 'aaaatttt';

// let arr = str.split('');

// let map = arr.reduce((acc, value) => {
//   acc[value] = acc[value] ? acc[value] + 1 : 1;
//   return acc;
// }, {});


// let newVar = '';
// for(let key in map) {
// newVar += ([key]+map[key]);
// }
// console.log(newVar);


// let str = 'aaaatttt';
// let arr = Object.entries([...str].reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {}));
// let newStr = arr.join(',');
// for(let i = 0; i<newStr.length; i++) {
//   let newStr2 = [];
//   if( newStr[i] !== ',') {
//     newStr2.push(newStr[i]);
//   }
//   return newStr2;
//   console.log(newStr2);
// }



