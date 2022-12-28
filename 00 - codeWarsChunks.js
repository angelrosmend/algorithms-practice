function makeNegative(num) {
    return num < 0 ? num : num  * -1
}



//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters -
//each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let chars = `${s1}${s2}`.split("")
  let arrSorted = [... new Set(chars)].sort()
  return arrSorted.join("")
}

console.log(longest("aretheyhere", "yestheyarehere"))


//best solution

const longest_best = (s1, s2) => [...new Set(s1+s2)].sort().join('')


/*
Implement the function unique_in_order which takes as argument a sequence and returns a list
of items without any elements with the same value next to each
other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

const uniqueInOrder= (iterable) => {
  let arrOrder = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== arrOrder[arrOrder.length - 1] ){
       arrOrder.push(iterable[i])
    }
  }
  return arrOrder
}


function smallestInteger(arr){
  let sortedArrarr = arr.sort()
  let smallestInteger = 1
  for(let i = 1; i < sortedArrarr.length + 1; i++){
    console.log(i, sortedArrarr.length)
    if(!sortedArrarr.includes(i)){
      smallestInteger = i
      break
    }
    if(i === sortedArrarr.length){
      smallestInteger = sortedArrarr[sortedArrarr.length - 1] + 1
    }
  }
  return smallestInteger
}
//console.log(smallestInteger([1,3,4,5,8,9,10]))
//console.log(smallestInteger([-1,-3,-4,-5,-10]))

console.log(smallestInteger([1, 2, 3]))


/**
 * 
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical
 *  order of the strings of a1 which are substrings of strings of a2.
 */

let a1 = ["live", "strong", "arp"]
let  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
  let iterator = 0
  let result = []
 while(iterator <= array2.length - 1){
    array1.forEach(element => {
      if(array2[iterator].includes(element)){
        result.push(element)
      }
     }
  );
  iterator++
 }
 return [...new Set(result)].sort()
}


/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
3
 , the cube above will have volume of (n−1)3 (n-1)^3(n−1) 
3
  and so on until the top which will have a volume of 13 1^31 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?



Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
3
 , the cube above will have volume of (n−1)3 (n-1)^3(n−1) 
3
  and so on until the top which will have a volume of 13 1^31 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer
 n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = mn 
3
 +(n−1) 
3
 +(n−2) 
3
 +...+1 
3
 =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

function findNb(m) {
    // your code
    return (-1);
}
*/
console.log(inArray(a1, a2))

/**
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

function vowelCount(str){
  let vowel = /^[aeiou]$/i;
  let counter = 0
  str.split("").forEach((char) => vowel.test(char) ? counter++ : 0)
  return counter
} 


//best solution

const getCount = (str) => (str.match(/[aeiou]/ig)||[]).length;


console.log(vowelCount("abracadabra"))
console.log(vowelCount("Angel Josue Rosales"))
