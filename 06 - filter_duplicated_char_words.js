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
const array = ['foo','bar', 2, 2, 'baz', 'foo']

const charRepeatsTwice = (el) => {
  let str = toString(el)
  const chars = {};
  for (let char of str) {
    chars[char] = (chars[char] || 0) + 1;
  }
  return Object.entries(chars).find((char) => char[1] < 2) ? true : false;
};

const filterDuplicatedCharWords = (arr) => arr.filter((word) => charRepeatsTwice(word));

console.log(filterDuplicatedCharWords(array));
