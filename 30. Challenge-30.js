// Sum of two lowest positive integers

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// Arrays                           Fundamentals.

function sumTwoSmallestNumbers(numbers) {
  
  // My version with the help of <AI>.
  return numbers
    .slice() // split the array
    .sort((a, b) => a - b) // Asending order
    .slice(0, 2) // start from index 0 and go untill index 1
    .reduce((a, b) => a + b, 0);

  // Another version
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
