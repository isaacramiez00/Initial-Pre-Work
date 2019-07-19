/* spread operator works similiar to the rest operator but is passes as an argument and can assign an array to another array using the "...arrVar" as the arg */
/* apply() method allows us to call other functions/methods for our current function/method we are working on */
//Math.max() returns the max value of comma-seperated args


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
