/* 6. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
function uniqueCharacters(str) {
  let array = str.toLowerCase().split("");
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray.join("");
}

console.log(uniqueCharacters("Thequickbrownfoxjumpsoverthelazydog"));
