// Implement a method to perform basic string compression using the counts
// of repeated characters. For example the string 'aabcccccaaa' would
// return 'a2b1c5a3'. If the "compressed" string would not become smaller than
// the original string, your method should return the original string. You can
// assume the string has only uppercase and lowercase characters (a-z)


const string_compression = (string) => {
  // use an array to reduce time complexity
  let compressed_string = []
  let count = 1
  let prev_char = string[0]

  for (var i = 1; i < string.length; i++) {
    const char = string[i]

    if (char !== prev_char) {
      compressed_string.push(prev_char, count)
      count = 1
      prev_char = char
    } else if (char === prev_char) {
      count++
    }

  }

  compressed_string.push(prev_char, count)
  compressed_string = compressed_string.join('')

  return compressed_string.length >= string.length ? string : compressed_string
}

module.exports = string_compression
