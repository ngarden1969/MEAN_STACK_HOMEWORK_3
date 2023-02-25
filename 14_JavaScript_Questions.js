/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
function amountToCoins(num) {
  let arr = [25, 10, 5, 1];
  let coins = "";

  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i]) {
      num = num - arr[i];
      coins = coins + arr[i] + ",";
      i--;
      console.log(i);
    }
  }
  return coins;
}

console.log(amountToCoins(123));
