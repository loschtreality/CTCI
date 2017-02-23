# There are three types of edits that can be preformed on strings:

# 1. insert a character
# 2. remove a character
# 3. replace a character

# Given two strings, write a function to check if they are one edit (or zero edits) away

# pale, ple -> true

# pales, pale -> true

# pale, bale -> true

# pale, bake -> false


def one_away(str, modified_str)
  return true if str === modified_str

  char_cache = Hash.new(0)
  char_difference = (str.size - modified_str.size).abs

  return false if char_difference > 1

  str.each_char do |chr|
    char_cache[chr] += 1
  end

  modified_str.each_char do |chr|
    if char_cache[chr]
      char_cache[chr] -= 1
      char_difference += 1 if char_cache[chr] < 0
    else
      char_difference += 1
    end
  end

  char_difference <= 1
end


p one_away('pale', 'ple') == true
p one_away('pales', 'pale') == true
p one_away('pale', 'bale') == true
p one_away('pale', 'bake') == false
