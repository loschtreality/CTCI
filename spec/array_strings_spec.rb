# require 'rspec'
require_relative '../Arrays_Strings/check_permutation'

  describe 'check_permutation' do
    it "checks if two strings are permutations of each other" do
      expect(check_permutation('asanta', 'atnasa')).to be(true)
    end
  end
