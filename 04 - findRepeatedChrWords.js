const wordsArr = [
  "asdf",
  "fdas",
  "asds",
  "d fm",
  "dfaa",
  "aaaa",
  "aabb",
  "aaabb",
];


const charRepeatsTwice = (str) => {
  const chars = {};
  for (let char of str) {
    chars[char] = (chars[char] || 0) + 1;
  }
  return Object.entries(chars).find((char) => char[1] === 2) ? true : false;
};

const filterDuplicatedCharWords = (arr) => arr.filter(word => charRepeatsTwice(word))

console.log(filterDuplicatedCharWords(wordsArr))
