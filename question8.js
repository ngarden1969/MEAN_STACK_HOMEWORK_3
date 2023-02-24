/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function primeNum(number) {
  let array = [];
  for (let i = 2; i < number; i++) {
    array.push(number % i);
  }
  console.log(array);

  if (array.includes(0)) {
    return "it is not a prime";
  } else {
    return "it is a prime";
  }
}

console.log(primeNum(59));
