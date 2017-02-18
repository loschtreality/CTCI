# 1.4 Palindrom Permutation:
# Given a string, write a function to check if it is a permutation of a
# palindrome. The palindrome does not eed to be limited ot just dictionary words

def perm_palin(string)
  values = Hash.new(0)

  string.each_char do |chr|
    values[chr] += 1
  end

  valid_palindrome?(values, string.size)
end

def valid_palindrome?(hash, length)
  if length.even?
    return hash.all? do |_, count|
      count.even?
    end
  else
    odd_count = 0
    hash.each { |_, count| odd_count += 1 if count.odd? }
    return odd_count == 1
  end
end

p perm_palin('abc') # false
p perm_palin('hello olleh') # true
p perm_palin('abcd') # false
