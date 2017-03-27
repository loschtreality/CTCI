// A binary search tree was created by traversing through an array from left to right
// and inserting each element. Given a binary search tree with distinct elements, print
// all possible arrays that could have led to this tree

//Example

// Input:

        //     2
        //   /   \
        // 1       3

// Output: {2, 1, 3}, {2, 3, 1}

// Clarifications:

// Ideas:
  // The two printings in the example are modificatons of pre-order traversal.
  // In order to get other printings, the other traversing methods can be used.
  // This incluces dfs, bfs, post-order, in-order. The nodes can go in the order
  // which are natural to the serching methods (left then right) or unaturally

  // Generate permutations of node combinations. Print the permutations -.-

const { bstWithParent } = require('./graph');

const bstSequences = (root) => {
  if (!root) {
    return null
  }
  return sequencesRecursive(root)
}

const sequencesRecursive = (node) => {
  if (!node) return null

  let perms = permutations(sequencesRecursive(node.left), sequencesRecursive(node.right))

  if (!perms) perms = [[node.val]]

  perms.forEach((permutation) => {
    permutation.unshift(node.val)
  })
  return perms
}

const permutations = (left, right) => {
  if (!left || !right) {
    return left || right
  }

  let perms = []

  for (let i = 0, len = left.length; i < len; i++) {
    for (let j = 0, len = right.length; j < len; j++) {
      perms.push.apply(perms, permutationsRecursive([], left[i], right[j], [], 0, 0))
    }
  }

  return perms
}

const permutationsRecursive = (perms, list1, list2, prefix, i, j) => {
  if (i === list1.length && j === list2.length) {
    perms.push(prefix.slice(0))
  } else {
    if (i < list1.length) {
      prefix.push(list2[i])
      permutationsRecursive(perms, list1, list2, prefix, i + 1, j)
      prefix.pop()
    }

    if (j < list2.length) {
      prefix.push(list2[j])
      permutationsRecursive(perms, list1, list2, prefix, i, j + 1)
      prefix.pop()
    }
  }
  return perms
}

console.log(bstSequences(bstWithParent))
