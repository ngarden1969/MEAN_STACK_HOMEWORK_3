/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/

function combinationGenerator(word) {
  let array = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      array.push(word.slice(i, j));
    }
  }
  return array;
}
console.log(combinationGenerator("dog"));
