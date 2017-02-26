// Implement an agorithm to determine if a string has all unique characters
// What if you can't use additional data structures


const is_unique = (string) => {
  let char_or = 0

  for (var i = 0; i < string.length; i++) {
    const char = string[i]
    char_or ^= char.charCodeAt(0)
  }

  return char_or > 0
}


 // console.log(is_unique('abcdef')) // true
 // console.log(is_unique('abcabc')) // false

module.exports = is_unique
