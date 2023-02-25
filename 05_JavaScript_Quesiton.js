/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
 */

function initialUpperCase(str) {
  let array = str.split(" "); //use space as a separator
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(" ");
}
console.log(initialUpperCase("hello darkness my old friend"));
