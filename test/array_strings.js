const assert = require('assert')

const check_permutation = require('../Arrays_Strings/check_permutation')
const is_unique = require('../Arrays_Strings/is_unique')
const one_away = require('../Arrays_Strings/one_away')
const palindrome_permutation = require('../Arrays_Strings/palindrome_permutation')
const { rotate_matrix, rotate_matrix_in_place } = require('../Arrays_Strings/rotate_matrix')
const URLify = require('../Arrays_Strings/URLify')
const zero_matrix = require('../Arrays_Strings/zero_matrix')
const string_compression = require('../Arrays_Strings/string_compression');
const string_rotation = require('../Arrays_Strings/string_rotation');


describe('check_permutation', function () {
  it('returns false if inputs lengths differ', function () {
    assert.equal(check_permutation('hello', 'h'), false)
  })

  it('returns true when given two valid permutations', function () {
    assert.equal(check_permutation('asanta', 'atnasa'), true)
  })

  it('returns false when given two different strings', function () {
    assert.equal(check_permutation('world', 'hello'), false)
  })
})


describe('is_unique', function () {

})

describe('one_away', function () {

})

describe('palindrome_permutation', function () {

})


describe('rotate_matrix', function () {
  let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
  ]

  const expected_matrix = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
  ]

  describe('rotate_new_matrix', function () {

    it('does not modify the original matrix', function () {
      rotate_matrix(matrix)
      assert.deepEqual(matrix, matrix)
    })

    it('rotates the matrix 90 degrees', function () {
      assert.deepEqual(rotate_matrix(matrix), expected_matrix)
    })

  })

  describe('rotate_matrix_in_place', function () {

    it('modifies the original matrix', function () {
      const old_matrix = matrix
      rotate_matrix_in_place(matrix)
      assert.notDeepEqual(old_matrix, matrix)
    })

    it('rotates the matrix 90 degrees', function () {
      rotate_matrix_in_place(matrix)
      assert.deepEqual(matrix, expected_matrix)
    })

  });

})


describe('URLify', function () {

})


describe('zero_matrix', function () {
  let matrix = [
      [1, 2, 3, 4],
      [5, 0, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
  ]

  it('does not modify the original matrix', function () {
    zero_matrix(matrix)
    assert.deepEqual(matrix, matrix)
  })

  it('changes a row to zero', function () {
    assert.deepEqual(zero_matrix(matrix)[1], [0,0,0,0])
  })

  it('changes a column to zero', function () {
    const matrix_result = zero_matrix(matrix)
    const matrix_column = []

    for (var i = 0; i < matrix_result.length; i++) {
      // modified second column for testing
      matrix_column.push(matrix_result[1][i])
    }

    assert.deepEqual(matrix_column, [0,0,0,0])

  })

  it('changes both a row and column to zero', function () {
    const result_matrix = [
        [1, 0, 3, 4],
        [0, 0, 0, 0],
        [9, 0, 11, 12],
        [13, 0, 15, 16]
    ]
    assert.deepEqual(zero_matrix(matrix), result_matrix)
  })

  it('handles multiple zeros', function () {
    const test_matrix = [
        [1, 2, 3, 0],
        [5, 6, 7, 8],
        [0, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    const result_matrix = [
        [0, 0, 0, 0],
        [0, 6, 7, 0],
        [0, 0, 0, 0],
        [0, 14, 15, 0]
    ]

    assert.deepEqual(zero_matrix(test_matrix), result_matrix)

  })

})

describe('string_compression', function () {
  it('compresses a string', function () {
    assert.equal(string_compression('aabcccccaaa'), 'a2b1c5a3')
  });

  it('handles upper case letters', function () {
    assert.equal(string_compression('AAaaaaBBcCCCCCc'), 'A2a4B2c1C5c1')
  });

  it('returns original string if compressed string has equal length', function () {
    assert.notEqual(string_compression('abcef'), 'a1b1c1e1f1')
  });
});

describe('string_rotation', function () {
  it('checks if one word is a rotation of the other', function () {
    assert.equal(string_rotation('waterbottle', 'erbottlewat'), true)
  })
});
