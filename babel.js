"use strict";
function runProgram(n) {
  n = document.getElementById(n).value;
  isLucky(n);
}
function isLucky(n) {
  var message;
  if (isWithinNumRange(n) && isEvenDigitSet(n) && identicalSumCheck(n)) {
    message = console.log("Yay! It's TRUE, the number " + n + " is considered lucky!");
    return message;
  }
  message = console.log("Oh No! It's False! The number " + n + " is NOT considered lucky!");
  return message;
}
function isWithinNumRange(n) {
  if (!isNaN(n) && n >= 10 && n < Math.pow(10, 6)) {
    return true;
  }
}
function isEvenDigitSet(n) {
  n = n.toString().length;
  if (n % 2 === 0) {
    return true;
  }
}
function identicalSumCheck(n) {
  var numString = n.toString();
  var numArrayTypeString = numString.split("");;
  var numArray = numArrayTypeString.map(Number);
  var half_length = Math.ceil(numString.length / 2);
  var leftHalf = numArray.splice(0, half_length);
  var rightHalf = numArray;
  var leftHalfSum = leftHalf.reduce(function (sum, oneNumber) {
    return sum + oneNumber;
  }, 0);
  var rightHalfSum = rightHalf.reduce(function (sum, oneNumber) {
    return sum + oneNumber;
  }, 0);
  if (leftHalfSum === rightHalfSum) {
    return true;
  }
}