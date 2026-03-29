// Invert values

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

You can assume that all values are integers. 
Do not mutate the input array.
*/ 

// Lists          Fundamentals          Arrays.

function invert (array){

  // My version
  let result = [];

  for (let i = 0; i < array.length; i++){
    result.push(array[i] * -1);
    }
    return result;

    // Better and shorter version
    return array.map(num => num * -1);
  }

console.log(invert([1, -2, 3, -4,]));
