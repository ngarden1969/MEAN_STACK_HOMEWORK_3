/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */

function outerFunction(callback) {
  callback();
}
function innerFunction() {
  console.log("I am inner function");
}

outerFunction(innerFunction);
