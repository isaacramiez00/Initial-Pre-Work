//the "let" keyword allows us to keep a variable constant
//"use strict"; enables strict mode and catches unsafe actions and bugs

let catName;
let quote;
function catTalk() {
  "use strict";

   catName = "Oliver";
   quote = catName + " says Meow!";

}
catTalk();
