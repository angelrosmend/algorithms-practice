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