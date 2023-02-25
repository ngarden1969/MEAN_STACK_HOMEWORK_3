/* 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const list = str.split("");
function stringId(number) {
  let id = "";
  let letterPicker;
  for (let i = 0; i < number; i++) {
    letterPicker = Math.floor(Math.random() * list.length);

    id += list[letterPicker];
  }
  return id;
}

console.log(stringId(12));
