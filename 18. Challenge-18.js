// Sum of positive

/*
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1 + 7 + 12 = 20
1 + 7 + 12 = 20

Note
If there is nothing to sum, the sum is default to 0.
*/

// Arrays                                   Fundamentals.
const positiveSum = arr => {

  // My version.
  return arr.filter(positive => positive > 0).reduce((sum, arr) => {
    return sum + arr;
  },0)

  // Another version
  return arr.reduce((sum, arr) =>  sum + (arr > 0 ? arr: 0), 0
 )
}

console.log(positiveSum([1, -4, 7, 12]));