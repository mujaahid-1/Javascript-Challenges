// Mumbling.

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Fundamentals               Strings               Puzzles


function accum(s) {

  // My solution.
  return s.split("").map((l,i) => l.toUpperCase() + l.repeat(i).toLowerCase()).join("-");

  // Another solution using for loop.
  let array = [];
  for (i = 0; i < (s.length); i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  };
  return array.join("-");
}

console.log(accum("ZpglnRxqenU"));