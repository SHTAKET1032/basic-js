const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth (item, level = 0) {
    if (item instanceof Array) {
      return (level > 0 ? 1 : 0) + item.map(function(value, index) {
        return calculateDepth(value, level + 1);
      }).reduce((a, b) => a+b, 0);
    }
    return 0;
  }
}

module.exports = {
  DepthCalculator
};



let arr = [[], []];

function calculateDepth (arr) {
  let x = 1;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      x = 1 + calculateDepth(arr[i]);
    } else x += 0;
    i++;
  }
  return x;
};

console.log(calculateDepth(arr));


// console.log(x);




// let arr = [
//   [1, [ 2, [ 3 ] ]],
//   ["Rustam", 25, 3, 4],
//   ["Ruslan", 35],
//   ["Aleksey", 29],
//   ["Vovan", 23]];

// function calculateDepth (item, level = 0) {
//   if (item instanceof Array) {
//     return (level > 0 ? 1 : 0) + item.map(function(value, index) {
//       return calculateDepth(value, level + 1);
//     }).reduce((a, b) => a+b, 0);
//   }
//   return 0;
// }

// console.log(calculateDepth(arr));