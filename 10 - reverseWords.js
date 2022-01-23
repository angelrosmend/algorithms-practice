/*
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the string should be retained.
"This is an  example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// Solution 1
let example = "This is an  example!"

function reverseWords (str){
    let paragraph = str.split(' ')
    let index = 0
    let reversedParagraph = []
    while(index < paragraph.length){
        let reversedStr = '';
        for(let i = paragraph[index].length - 1; i >= 0; i--){
            reversedStr += paragraph[index][i] 
        }
        reversedParagraph.push(reversedStr)
        index++
    }
    return reversedParagraph.join(' ')
}
//Solution 2

function reverseWords2(str){
    let reverStr = str.split(' ').map(word => word.split('').reverse().join(''))
    return reverStr.join(' ')
}
console.log(reverseWords(example), reverseWords2(example));