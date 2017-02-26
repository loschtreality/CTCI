// There are three types of edits that can be preformed on strings:

// 1. insert a character
// 2. remove a character
// 3. replace a character

// Given two strings, write a function to check if they are one edit (or zero edits) away

// pale, ple -> true

// pales, pale -> true

// pale, bale -> true

// pale, bake -> false

const one_away = (str, modified_str) => {
  if (str === modified_str) return true

  const char_cache = {}
  let char_difference = Math.abs(str.length - modified_str.length)

  if (char_difference > 1) return false

  for (var i = 0; i < str.length; i++) {
    const letter = str[i]
    if (char_cache[letter]) {
      char_cache[letter]++
    } else {
      char_cache[letter] = 1
    }
  }

  for (var i = 0; i < modified_str.length; i++) {
    const letter = modified_str[i]
    if (char_cache[letter]) {
      char_cache[letter]--
      if (char_cache[letter] < 0) { char_difference++ }
    } else {
      char_difference++
    }
  }

  return char_difference <= 1
}


// console.log(one_away('pale', 'ple') === true)
// console.log(one_away('pales', 'pale') === true)
// console.log(one_away('pale', 'bale') === true)
// console.log(one_away('pale', 'bake') === false)


module.exports = one_away
