isLucky(481229);


function isLucky(n) {
  var message;

  if (isWithinNumRange(n) && isEvenDigitSet(n) && identicalSumCheck(n)) {
    message = console.log(`Yay! It's TRUE, the number ${n} is considered lucky!`)
    return message;
  }
  message = console.log(`Oh No! It's False! The number ${n} is NOT considered lucky!`)
  return message;
}


/* ====================================
=== === === === Functions === === === ===
==================================== */

function isWithinNumRange(n) {
  if (!isNaN(n) && n >= 10 && n < Math.pow(10, 6)) {
    return true;
  }
} // isWithinNumRange



function isEvenDigitSet(n) {
  n = n.toString().length;

  if (n % 2 === 0) {
    return true;
  }
} // isEvenDigitSet






function identicalSumCheck(n) {
  let numString = n.toString();

  // Array of Numbers with Type = "String"
  let numArrayTypeString = numString.split("");;
  console.log(numArrayTypeString);

  // Array of Numbers with Type = "Number"
  let numArray = numArrayTypeString.map(Number);
  console.log(numArray);




  const half_length = Math.ceil(numString.length / 2);

  let leftHalf = numArray.splice(0, half_length);
  console.log(leftHalf)

  let rightHalf = numArray;
  console.log(rightHalf);




  let leftHalfSum = leftHalf.reduce(
    (sum, oneNumber) => sum + oneNumber,
    0
  );

  console.log(leftHalfSum);



  let rightHalfSum = rightHalf.reduce(
    (sum, oneNumber) => sum + oneNumber,
    0
  );

  console.log(rightHalfSum);

  if (leftHalfSum === rightHalfSum) {
    return true;
  }
} // identicalSumCheck