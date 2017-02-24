require_relative '../Arrays_Strings/check_permutation'
require_relative '../Arrays_Strings/is_unique'
require_relative '../Arrays_Strings/one_away'
require_relative '../Arrays_Strings/palindrome_permutation'
require_relative '../Arrays_Strings/rotate_matrix'
require_relative '../Arrays_Strings/URLify'

  describe 'check_permutation' do
    it "checks if two strings are permutations of each other" do
      expect(check_permutation('asanta', 'atnasa')).to be(true)
      expect(check_permutation('hello', 'world')).to be(false)
    end
  end
