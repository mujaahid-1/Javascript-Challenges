// Grasshopper - Personalized Message

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

//Fundamentals                                  Strings.

function greet (name, owner) {

  // My solution.
  return name === owner ? "Hello boss" : "Hello guest";

  // Another solution.
   return `Hello ${name==owner?'boss':'guest'}`
}

console.log(greet('Greg', 'Daniel'));