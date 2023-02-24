/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/

let array = [2, 4, 45, 1, 65, 7];
let newArr = [];

function greatestLowest(arr) {
  newArr.push(arr.sort((a, b) => a - b)[1]);
  newArr.push(arr.sort((a, b) => a - b)[arr.length - 2]);
  console.log(newArr.join(","));
}

greatestLowest(array);
