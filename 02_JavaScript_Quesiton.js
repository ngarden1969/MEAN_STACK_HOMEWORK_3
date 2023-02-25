/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function Palindrome(str) {
  let array = str.split("").reverse().join("");
  if (array == str) {
    return "It is a palindrome.";
  } else {
    return "It is not a palindrome.";
  }
}
console.log(Palindrome("madam"));
