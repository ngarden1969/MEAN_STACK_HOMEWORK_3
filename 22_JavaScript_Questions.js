/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
 */

let word = "microsoft.com";
function occurrenceCounter(str, letter) {
  let array = str.toLowerCase().split("").sort();
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(occurrenceCounter(word, "o"));
