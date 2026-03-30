// If you can't sleep, just count sheep!!

/*
If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// Fundamentals                 Strings
var countSheep = function (num) {
  
  // My version
  let result = "";
  for (let i = 0; i < num; i++) {
    result += `${i + 1} sheep...`;
  }
  return result;

  // Another possible solution
  const arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i + " sheep...");
  }
  return arr.join("");
};

console.log(countSheep(3));
