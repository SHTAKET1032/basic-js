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
  calculateDepth (someArr) {
    let count = 1;
    for (const elem of someArr) {
      if (Array.isArray(elem)) {
        let subDepth = this.calculateDepth(elem);
        if (subDepth >= count) {
          count = subDepth + 1;
        }
      }
    }
    return count;
  }
}
module.exports = {
  DepthCalculator
};




// let result = 1;

// function calculateDepth (someArr) {
  
//   result = someArr.reduce(function(acc, elem) {
//     if(Array.isArray(elem)) {
//       acc = acc +1 + calculateDepth(elem);
//     } else {
//       acc = + 0;
//     }
//   }, 0);
//   return result;
// }


// console.log(calculateDepth(arr));



// let arr = [1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];
// let count = 1;
// function calculateDepth (someArr) {
  
//   for (const elem of someArr) {
//     if (Array.isArray(elem)) {
//       count++;
//       calculateDepth(elem);
//     }else {
//       count+=0;
//     }
//   }
//   return count;
// }
// console.log(calculateDepth(arr));

// let res = 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         let subDepth = this.calculateDepth(arr[i]);
//         if (subDepth >= res) {
//           res = subDepth + 1;
//         }
//       }
//     }
//     return res;