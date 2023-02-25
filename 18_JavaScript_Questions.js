/* 18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

*/
const a = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
{
  function find(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low < high) {
      mid = Math.floor((low + high) / 2);
      console.log(mid);
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return high;
  }
}
console.log(find(a, 5));
