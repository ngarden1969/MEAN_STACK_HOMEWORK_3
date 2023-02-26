/* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

const list = ["Australia", "Germany", "United States of America"];

function longestName(arr) {
  let length = 0;
  let longestCountry = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > length) {
      length = list[i].length;
      longestCountry = list[i];
    }
  }
  return longestCountry;
}
console.log(longestName(list));
