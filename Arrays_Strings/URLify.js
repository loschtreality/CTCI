// Write a method to replace all spaces in a string with %20.
// You may assume that the string has sufficient space at the end
// to hold the additional characters, and that you are given the "true"
// length of the string

// Example:
// Input "Mr John Smith      ", 13

// Output "Mr%20John%20Smith"


const URLify = (string) => {
  return string.trim().split(' ').join('%20')
}

console.log(URLify("Mr John Smith      "))
