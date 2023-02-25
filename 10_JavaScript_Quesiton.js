/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

//needs more work .....not complete yet

function matrix(n) {
  let str = "";
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
         console.log((arr[i] = new Array(n).fill(1)));
      } else {
         console.log((arr[i] = new Array(n).fill(0)));
      }
    }
    console.log(" ");
  }
}
matrix(4);
