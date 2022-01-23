const  array = ['foo', 'bar', 2, 2, 'baz', 'foo']

function noRepeat(arr){
    var newArr = [];
    let elements = {}
    for(let item of arr){
        elements[item] = (elements[item] || 0) + 1
    }

  return Object.entries(elements).find((item) => item[1] < 2)
}

console.log(noRepeat(array))
const isPangram = (str = "") => {
  let sentence = str.toLowerCase().replace(/[0-9]/g, '')
  let index = 0
  
  while(index < alphabet.length){
    if(sentence.indexOf(alphabet[index]) < 0){
      return false;
    }
    index++
  }
  return true;
};

console.log(isPangram(alphabetSrt))
