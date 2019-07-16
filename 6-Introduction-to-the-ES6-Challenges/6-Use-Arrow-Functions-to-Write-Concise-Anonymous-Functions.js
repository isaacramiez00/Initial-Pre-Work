//Inline functions are functions we can pass without naming them;
//Common when passing a function as an arg to another function
/* we use the arrow function syntax:
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
*/

/* If there is no function body and only a return value, we can write one-line arrow functions:
const myFunc = () => "value"
*/

const magic = () => new Date();
