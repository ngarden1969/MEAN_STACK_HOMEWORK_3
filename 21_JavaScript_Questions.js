/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/



/********************----NEEDA---*************************/
/********************----TO----*************************/
/********************----BE----*************************/
/********************----Broken DOWN----*************************/

{
  const a = [1, 2, 3];

  function getSubsets(arr, len) {
    let sets = [];
    for (let i = 0; i < Math.pow(arr.length, len); i++) {
      let k = arr.length - 1;
      let a = [];
      do {
        if ((i & (1 << k)) !== 0) {
          a.push(arr[k]);
        }
      } while (k--);

      if (a.length >= len) {
        sets.push(a);
      }
    }
    return sets;
  }
  console.log(getSubsets(a, 2));
}
