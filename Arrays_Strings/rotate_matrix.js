// Given an image represented by an N*N matrix, where each pixel in the image
// is 4 bytes, write a method to rotate the image by 90 degrees, can you do it in place?


const rotate_matrix = (matrix) => {
  if (matrix.length !== matrix[0].length) { return new Error("uneven matrix") }

  const new_matrix = []
  for (let xAxis = 0; xAxis < matrix.length; xAxis++) {
    const new_row = []
    for (let yAixs = 0; yAixs < matrix.length; yAixs++) {
      new_row.unshift(matrix[yAixs][xAxis])
    }
    new_matrix.push(new_row)
  }

  return new_matrix
}

const rotate_matrix_in_place = (matrix) => {
  if (matrix.length !== matrix[0].length) { return new Error("uneven matrix") }

  for (let xAxis = 0; xAxis < Math.floor(matrix.length / 2); xAxis++) {
    const first = xAxis
    const last = matrix.length - 1 - xAxis

    for (let i = first; i < last; i++) {
      const offset = i - first
      const top = matrix[first][i]

      // left -> top
      matrix[first][i] = matrix[last - offset][first]

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last]

      // top -> right
      matrix[i][last] = top
    }

  }

  return matrix
}

module.exports = { rotate_matrix, rotate_matrix_in_place }
