/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. */

function longestSubstring(str) {
  let array = str.split("");
  let longest = "";
  let temp = "";

  for (let i = 0; i < array.length; i++) {
    for (j = i; j < array.length; j++) {
      if (temp.includes(array[j])) {
        break;
      } else {
        temp += array[j];
      }
    }
    if (longest.length < temp.length) {
      longest = temp;
    }
    temp = "";
  }
  return longest;
}
console.log(longestSubstring("helloworld.com"));
