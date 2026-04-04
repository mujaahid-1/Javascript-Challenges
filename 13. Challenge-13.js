// Vowel Count

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Strings                                Fundamentals.

const getCount = function (str) {
  // My version.
  let vowels = "aeiou";
  return str.split("").map(char =>  vowels.includes(char)).reduce((number, count) => {
      return number + count
    },0);

  // Slightly better version

  let chars = "aeiou";
  return str.split("").reduce((count, char) => {
    return chars.includes(char) ? count + 1 : count;
  }, 0);
};

console.log(getCount("abdi yare xasan xuseen osman"));
