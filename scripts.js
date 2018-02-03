function isLucky(n) {

  if (isWithinNumRange(n) && isEvenDigitSet(n) && identicalSumCheck(n)) {

    console.log(`
                Yay! It's TRUE, the number ${n} is considered lucky!
               `)
  }

}










/*
1) make sure n is a number
2) if n is a number, then check if it is within the range constraint
*/

function isWithinNumRange(n) {
  if (!isNaN(n) && n >= 10 && n < Math.pow(10, 6)) {
    return true;
  }
}


/* ===== isEvenDigitSet(n) ====

// Task1
Convert n to a string

// Task2
Lets use the string propertys ".length" method,
Make n equal the number of characters in this string

// Task3
Lets use the Modulus operator(%) to check if the character count is an even number.
A number is even if it can be divided by two with no remainder
If it is an even number, then it will return "True", since we will have an even digit number set.
*/


function isEvenDigitSet(n) {

  // Task 1
  var n = n.toString();
  console.log('Task1 ===> ' + n + ' this is a ' + typeof (n));

  // Task 2
  n = n.length;
  console.log('Task2 ===> ' + n + ' this is a ' + typeof (n));

  // Task3
  if (n % 2 === 0) {
    const charCountIsEven = true
    console.log(charCountIsEven)
    return charCountIsEven;
  }

}




/*
-We make n into a String
-We get this Strings length

-We make this string into an Array
*/

function identicalSumCheck(n) {

  let numString = n.toString();

  // Array of Numbers with Type = "String"
  let numArrayTypeString = numString.split("");;
  console.log(numArrayTypeString);

  // Array of Numbers with Type = "Number"
  let numArray = numArrayTypeString.map(Number);
  console.log(numArray);


  // ==============
  let half_length = Math.ceil(numString.length / 2);
  console.log(half_length);
  // ==============



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

}












isLucky(1230);