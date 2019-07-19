//The rest operator (..args) allow us to declare parameters w/out knowing how many args we want
//We can then come up with parameters as we go writing our function

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); // 10
