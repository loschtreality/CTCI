// Given two strings, write a method to decide if one is a permutation
// of the other


const check_permutation = (str, string) => {
  if (str.length !== string.length) { return false }

  const char_cache = {}

  for (var i = 0; i < str.length; i++) {
    const str_chr = str[i]
    const string_chr = string[i]

    if (char_cache[str_chr]) {
      char_cache[str_chr]++
    } else {
      char_cache[str_chr] = 1
    }

    if (char_cache[string_chr]) {
      char_cache[string_chr]--
    } else {
      char_cache[string_chr] = -1
    }
  }

  return check_cache(char_cache);

}


const check_cache = (char_hash) => {
  return Object.keys(char_hash).every((count) => {
    return char_hash[count] === 0
  })
}


console.log(check_permutation('asanta', 'atnasa'))
console.log(check_permutation('world', 'hello'))

module.exports = check_permutation
