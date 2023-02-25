/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function test() {
  console.log("Testing");
}
let str;
let str1 = null;
let name = {
  first: "Bhim",
};
function returnType(arg) {
  return typeof arg;
}

console.log(returnType(test));
