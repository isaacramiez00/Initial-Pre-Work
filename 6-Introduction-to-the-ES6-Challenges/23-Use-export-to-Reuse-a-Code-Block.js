//If we want to import a file, we need to export functions/variable we want to access in other files
/* syntax1:
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

export { capitalizeString, foo } //alternate one line export statement
export statement require special syntax to execute in browser
*/



"use strict";
export const foo = "bar";
export const bar = "foo";
