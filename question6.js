/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/

function longestWordFinder(str) {
  str = str.split(" ");
  let arr = [];
  arr = str.sort((a, b) => b.length - a.length);
  return arr[0];
}

console.log(longestWordFinder("Web Development Tutorial"));
