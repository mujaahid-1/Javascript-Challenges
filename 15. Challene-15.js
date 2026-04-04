// Isograms

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// Strings                              Fundamentals.


function isIsogram (str){

  // My version
  let ignoreCase = str.toLowerCase();
  for (let i = 0; i < ignoreCase.length; i++){
    for (let j = i + 1; j < ignoreCase.length; j++){
      if (ignoreCase[i] === ignoreCase[j])
        return false
    }
  }
  return true

  // Another version
  return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("moOse"));