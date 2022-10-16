const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  return (n-1)%9+1;
}

module.exports = {
  getSumOfDigits
};



// function numSum (num) {
//   let arr = num.toString(10).split('').map(int => parseInt(int, 10));
  
//   let sumElement = arr.reduce(function(acc, element) {
//     return acc + element;
//   },0)

//   if (sumElement>9) {
//     numSum(sumElement);
//   } else {
//   console.log (sumElement);
//   }
// }

// numSum(1758);

// let value = 777;
// function sumDigits(n) {
//   console.log ((n - 1) % 9 + 1);
// }
// sumDigits(value);