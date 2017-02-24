# Given two strings, write a method to decide if one is a permutation
# of the other


def check_permutation(str, string)
  str.split('').sort == string.split('').sort
end
