const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else if (Object.keys(date).length > 0 || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  } else {
    let month = date.getMonth();
    if (month == 11 || month == 0 ||  month == 1) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn|fall';
    }
  }
}

module.exports = {
  getSeason
};



// let date = (new Date);



// if (date = undefined) {
//   return 'Unable to determine the time of year!';
// } else if (Object.keys(date).length > 0) {
//   throw new Error('Invalid date!');
// } else if ( !(date instanceof Date)) {
//   throw new Error('Invalid date!');
// } else {
//   let month = date.getMonth();
//   if ( month >= 0 && month <= 2) {
//     console.log ('winter');
//   } else if (month >= 3 && month <= 5) {
//     console.log ('spring');
//   } else if (month >= 3 && month <= 5) {
//     console.log ('spring');
//   } else if (month >= 6 && month <= 8) {
//     console.log ('summer');
//   } else if (month >= 9 && month <= 11) {
//     console.log ('autumn|fall');
//   }
// }
