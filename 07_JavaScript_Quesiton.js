/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/

function vowels(str) {
  let arr = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) count++;
  }
  return count;
}

console.log(vowels("The quick brown fox"));
