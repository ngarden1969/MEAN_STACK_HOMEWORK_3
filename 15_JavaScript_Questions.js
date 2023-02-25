/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. */

function exponent(a, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = a * result;
  }
  return result;
}
console.log(exponent(5, 4));
