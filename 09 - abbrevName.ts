/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

*/
let fullName: string =  "Sam Harris"

function abbrevName(fullName: string){
  return fullName.split(" ").map(item => item[0].toUpperCase()).join(".")
}

console.log(abbrevName(fullName), fullName);