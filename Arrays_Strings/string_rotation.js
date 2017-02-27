// Assume you have a method is_substring which checks if one word is a substring
// of another, Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
// using only one call to is_substring

// Example:

// waterbottle is a rotation of erbottlewat


const string_rotation = (s1, s2) => {
  if (s1.length !== s2.length) { return false }
  s1 += s1
  return is_substring(s1, s2)
}

const is_substring = (s1, s2) => {
  return s1.includes(s2)
}

module.exports = string_rotation
