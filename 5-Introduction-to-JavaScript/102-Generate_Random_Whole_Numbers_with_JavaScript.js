/* Generate random whole numbers:
''' Use Math.random() to generate a random decimal.
Multiply that random decimal by 20. e.g.(range is  0 - 19)
Use another function, Math.floor() to round the number down to its nearest whole number. ''' (freeCodeCamp)
*/
//Math.floor(Math.random() * 20);
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
