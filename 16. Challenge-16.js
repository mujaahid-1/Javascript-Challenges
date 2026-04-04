// Counting sheep...

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Arrays                             Fundamentals.

function countSheeps(sheep) {
  // My version
  return sheep
    .filter((sheep) => sheep)
    .reduce((count, sheep) => {
      return count + sheep;
    }, 0);

  // Slighly better version
  return sheep.reduce((count, s) => count + (s ? 1 : 0), 0);

  // Another version using only filter method().
  return sheep.filter((s) => s).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    undefined,
    true,
    true,
    false,
    true,
    false,
    null,
    true,
    false,
    false,
    true,
    undefined,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    null,
    true,
  ]),
);
