// 1.4 Palindrom Permutation:
// Given a string, write a function to check if it is a permutation of a
// palindrome. The palindrome does not eed to be limited ot just dictionary words

const perm_palin = (string) => {
  const values = {}

  string.split('').forEach((char) => {
    if (values[char]) {
      values[char]++
    } else {
      values[char] = 1
    }
  })

  return valid_palindrome(values, string.length)
}


const valid_palindrome = (hash, length) => {
  if (length % 2 === 0) {
    return Object.keys(hash).every((letter) => {
      return hash[letter] % 2 === 0
    })
  } else {
    let odd_count = 0

    Object.keys(hash).forEach((letter) => {
      if (hash[letter] % 2 !== 0) {
        odd_count++
      }
    })
    return odd_count == 1
  }
}

// console.log(perm_palin('abc')) // false
// console.log(perm_palin('hello olleh')) // true
// console.log(perm_palin('abcd')) // false


module.exports = perm_palin
