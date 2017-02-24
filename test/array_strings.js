const assert = require('assert');

const check_permutation = require('../Arrays_Strings/check_permutation')


describe('check_permutation', function () {
  it('returns false if inputs lengths differ', function () {
    assert.equal(check_permutation('hello', 'h'), false)
  });

  it('returns true when given two valid permutations', function () {
    assert.equal(check_permutation('asanta', 'atnasa'), true)
  });

  it('returns false when given two different strings', function () {
    assert.equal(check_permutation('world', 'hello'), false)
  });
});
