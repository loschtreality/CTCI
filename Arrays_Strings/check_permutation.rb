# Given two strings, write a method to decide if one is a permutation
# of the other


def is_permutation?(str, string)
  str.split('').sort == string.split('').sort
end


p is_permutation?('asanta', 'atnasa')
p is_permutation?('world', 'hello')
