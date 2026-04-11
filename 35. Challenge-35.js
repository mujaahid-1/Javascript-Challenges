// Get the Middle Character.

/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

// Fundamentals                                Strings.

const getMiddle = function (s) {

  // My solution with a liitle bit of <AI> help.
  let middle = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[middle - 1] + s[middle];
  }
  else return s[middle];

  // Similar solution.
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
};

console.log(getMiddle("String"));
