// String repeat

/*
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Fundamentals           Strings

function repeatStr(n, s) {
  // My version
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;

  // Simpler version using built-in method
  return s.repeat(n);
}

console.log(repeatStr(5, "i"));
