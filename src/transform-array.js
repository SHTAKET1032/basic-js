const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
    }
    let a = 0;

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev") {
    newArr[a] = arr[i];
    a++;
    }
    else {
    if (arr[i] == "--discard-next" && arr[i + 1] != undefined) {
    i++;
    }
    if (arr[i] == "--discard-prev" && arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
    newArr.splice(a - 1, 1);
    a--;
    }
    if (arr[i] == "--double-next" && arr[i + 1] != undefined) {
    newArr[a] = arr[i + 1];
    a++;
    }
    if (arr[i] == "--double-prev" && arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
    newArr[a] = arr[i - 1];
    a++;
    }
    }
    }
    return newArr;
    };
    




// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error ("'arr' parameter must be an instance of the Array!");
//   } 

//   if (arr.length == 0) {
//     return arr;
//   }
  
//   let newArr = [...arr];
  
//   newArr.forEach((item, i) => {
//     switch(item) {
//         case '--discard-next':
//             newArr.splice(i, 2);
//             break;
//         case '--discard-prev':
//             if (i === 0) {
//                 newArr.splice(i, 1);
//                 break;
//             } else {
//                 newArr.splice(i-1, 2)
//             break; 
//             }
//         case '--double-next':
//             if (i === newArr.length-1) {
//                 newArr.splice(i, 1);
//                 break;
//             } else {
//                 newArr.splice(i, 1, newArr[i+1])
//                 break;
//             }

//         case '--double-prev':
//             if (i === 0) {
//                 newArr.splice(i, 1);
//                 break;
//             } else {
//                 newArr.splice(i, 1, newArr[i-1])
//             break; 
//             }
//         default: 
//             break;
//     }
// })

// return newArr;
// }


  
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == '--discard-next') {
  //     newArr.splice(i, 2);
  //     return newArr;
  //   } else if (arr[i] == '--discard-prev' && i!==0) {
  //     newArr.splice(i-1, 2);
  //     return newArr;
  //   } else if (arr[i] == '--discard-prev' && i==0) {
  //     newArr.splice(i, 1);
  //     return newArr;
  //   } else if (arr[i] == '--double-next' && i == newArr.length-1) {
  //     newArr.splice(i, 1);
  //     return newArr;
  //   } else if (arr[i] == '--double-next') {
  //     newArr.splice(i, 1, newArr[i+1]);
  //     return newArr;
  //   } else if (arr[i] == '--double-prev' && i == 0) {
  //     newArr.splice(i, 1);
  //     return newArr;
  //   } else if (arr[i] == '--double-prev') {
  //     newArr.splice(i, 1, newArr[i-1]);
  //     return newArr;
  //   }
  // }
// }

module.exports = {
  transform
};




// let arr = ['--double-prev', 1, 2, 3, 1337, 4, 5];

// if (!Array.isArray(arr)) {
//   console.log('arr parameter must be an instance of the Array!')
// } 

// let newArr = [...arr];


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == '--discard-next') {
//     newArr.splice(i, 2);
//     console.log(newArr);
//   } else if (arr[i] == '--discard-prev' && i!==0) {
//     newArr.splice(i-1, 2);
//     console.log(newArr);
//   } else if (arr[i] == '--discard-prev' && i==0) {
//     newArr.splice(i, 1);
//     console.log(newArr);
//   } else if (arr[i] == '--double-next' && i == newArr.length-1) {
//     newArr.splice(i, 1);
//     console.log(newArr);
//   } else if (arr[i] == '--double-next') {
//     newArr.splice(i, 1, newArr[i+1]);
//     console.log(newArr);
//   } else if (arr[i] == '--double-prev' && i == 0) {
//     newArr.splice(i, 1);
//     console.log(newArr);
//   } else if (arr[i] == '--double-prev') {
//     newArr.splice(i, 1, newArr[i-1]);
//     console.log(newArr);
//   }
// }