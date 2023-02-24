// write a Javascript function that reverse a number

function reverseFunction(number) {
  let array = String(number).split("");
  return array.reverse().join('');
}
console.log(reverseFunction(32243));
