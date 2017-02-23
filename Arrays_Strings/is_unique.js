// Implement an agorithm to determine if a string has all unique characters
// What if you can't use additional data structures


const unique_chars = (string) => {
  let char_or = 0

  for (var i = 0; i < string.length; i++) {
    const char = string[i]
    char_or ^= char.charCodeAt(0)
  }

  return char_or > 0
}


 console.log(unique_chars('abcdef')) // true
 console.log(unique_chars('abcabc')) // false
