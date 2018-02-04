var test = require('tape').test;
// ===============
var isWithinNumRange = require('./script-test');
var isEvenDigitSet = require('./script-test');
var identicalSumCheck = require('./script-test');
var isLucky = require('./script-test');
// ===============
var n = 1221;
// ==========

/*
test('The isWithinNumRange method', function (t) {
  var actual = isWithinNumRange(n);
  var expected = true;
  t.equal(actual, expected, 'should check if number input is within the number range constraint');
  t.end();
});
*/


test('The isEvenDigitSet method', function (t) {
  var actual = isEvenDigitSet(n);
  var expected = true;
  t.equal(actual, expected, 'should check character count is an even number via Modulus Operator');
  t.end();
});


/*
test('The identicalSumCheck method', function (t) {
  var actual = identicalSumCheck(n);
  var expected = true;
  t.equal(actual, expected, 'should check the sum of first half of characters is equal to sum of second half');
  t.end();
});
*/

/*
test('The isLucky method', function (t) {
  var actual = isLucky(n);
  var expected = true;
  t.equal(actual, expected, 'should check the entire program');
  t.end();
});
*/
