/* 19. Write a JavaScript function that returns array elements larger than a number. */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortedArr = array.sort((a, b) => a - b);

function largerArr(number) {
  for (let i = 0; i < array.length; i++) {
    if (number < array[i]) {
      return array.slice(array[i - 1]);
    }
  }
}

console.log(largerArr(-1));
