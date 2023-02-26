/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */

function repetition(str) {
  let array = str.toLowerCase().split("").sort();
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
    } else {
      console.log(`${array[i]}: ${count}`);
      count = 1;
    }
  }
}
repetition("hello");
