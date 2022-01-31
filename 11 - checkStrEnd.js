const solution1 = (str, ending) => str.endsWith(ending)

function solution2(str, ending){
  let indexEnd = ending.length -1
  let indexStr = str.length - 1
  while((indexEnd || indexStr) > - 1 ){
      if(str[indexStr] !== ending[indexEnd]){
        return false
      }
      indexEnd--
      indexStr--
      console.log(str[indexStr], ending[indexEnd]);
  }
  return true
}

var strg = "abcde"

console.log(solution2("abcde", "bfde"));
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */