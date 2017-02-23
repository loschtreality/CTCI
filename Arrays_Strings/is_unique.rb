# Implement an agorithm to determine if a string has all unique characters
# What if you can't use additional data structures


def unique_chars(string)
  char_or = 0

  string.each_char do |chr|
    char_or ^= chr.ord
  end

  char_or > 0
end


p unique_chars('abcdef') # true
p unique_chars('abcabc') # false
