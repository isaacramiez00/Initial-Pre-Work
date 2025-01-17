//We can destruct arrays
//Destructing arrays allow us to assign specific elm to variables
/*
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

we can also skip elm using commas when assigning variables to elm in an array:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
