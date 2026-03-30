// Square(n) Sum

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9.
*/ 

const squareSum = function (numbers){

  // My version.
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i] ** 2;
  }

  return total;

  // Better version using the reduce method.
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

console.log(squareSum([1,2,2]));