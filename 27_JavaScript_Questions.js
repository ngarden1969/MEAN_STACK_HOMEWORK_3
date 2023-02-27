/* 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
*/

function longestPalindrome(str1) {
  let maxLength = 0;
  let longPalindrome = "";

  for (let i = 0; i < str1.length; i++) {
    let subs1 = str1.substr(i, str1.length);

    for (let j = subs1.length; j >= 0; j--) {
      let subs2 = subs1.substr(0, j);
      if (subs2.length <= 1) continue;

      if (palindromeCheck(subs2)) {
        if (subs2.length > maxLength) {
          maxLength = subs2.length;
          longPalindrome = subs2;
        }
      }
    }
  }

  return longPalindrome;
}
function palindromeCheck(str1) {
  let rev = str1.split("").reverse().join("");
  return str1 == rev;
}

console.log(longestPalindrome("bananas"));
