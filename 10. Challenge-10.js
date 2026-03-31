// Reversed Strings

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Strings.                            Fundamentals.

const reverseString = (str) => {

  // My version
  let result = "";
  for (let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;

  // Easier version
  return str.split('').reverse().join('');

  // Another version
  const solution = s => [...s].reverse().join('')
}

console.log(reverseString("hello"));