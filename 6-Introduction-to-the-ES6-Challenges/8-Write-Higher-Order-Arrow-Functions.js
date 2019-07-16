/* "filter() method creates an array filled with all array elements that pass a test/condition(function)" (w3schools)
"map() elements a new array w/ results of calling a function for every array element"(w3schools)
"reduce() method reduces the array to a signle value"(wdschools)
"The Math.pow() function returns the base to the exponent power, that is, baseexponent." (developers.mozilla.org)
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
    const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

    // test your code
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
