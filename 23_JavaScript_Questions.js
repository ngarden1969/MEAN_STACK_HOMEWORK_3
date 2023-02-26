/* 23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/

function notRepeated(str) {
  let array = str.toLowerCase().split("");
  let count = 0;
  let result = "";
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count < 2) {
      result = array[i];
      break;
    }
  }
  return result;
}

console.log(notRepeated("hello"));
