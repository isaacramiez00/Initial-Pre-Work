//javascript arrow functions let us declare objects in a simplier way thats short
//Instead of writing: x: x, we canjust write x and it will convert to the same meaning
/*
before:
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

after:
const getMousePosition = (x, y) => ({ x, y });
*/
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {name, age, gender};
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
