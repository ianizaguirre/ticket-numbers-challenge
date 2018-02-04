/*
module.exports = function isLucky(n) {
  var message;
  if (isWithinNumRange(n) && isEvenDigitSet(n) && identicalSumCheck(n)) {
    message = console.log(`Yay! It's TRUE, the number ${n} is considered lucky!`)
    return message;
  }
  message = console.log(`Oh No! It's False! The number ${n} is NOT considered lucky!`)
  return message;
}
*/

/* ====================================
=== === === === Functions === === === ===
==================================== */

/*
module.exports = function isWithinNumRange(n) {
  if (!isNaN(n) && n >= 10 && n < Math.pow(10, 6)) {
    return true;
  }
} // isWithinNumRange
*/

module.exports = function isEvenDigitSet(n) {
  n = n.toString().length;
  if (n % 2 === 0) {
    return true;
  }
} // isEvenDigitSet

/*
module.exports = function identicalSumCheck(n) {
  const numString = n.toString();
  const numArrayTypeString = numString.split("");;
  const numArray = numArrayTypeString.map(Number);
  const half_length = Math.ceil(numString.length / 2);
  const leftHalf = numArray.splice(0, half_length);
  const rightHalf = numArray;
  const leftHalfSum = leftHalf.reduce(
    (sum, oneNumber) => sum + oneNumber,
    0
  );
  const rightHalfSum = rightHalf.reduce(
    (sum, oneNumber) => sum + oneNumber,
    0
  );
  if (leftHalfSum === rightHalfSum) {
    return true;
  }
} // identicalSumCheck


*/