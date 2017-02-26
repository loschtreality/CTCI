// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and colmn are set to 0

const matrix =[[1,2,3,0], [5,6,7,8], [0,10,11,12], [13,14,15,16]]

const zero_matrix = (matrix) => {
  const zero_axises = []

  // Hacker's deep clone ^.^
  matrix = JSON.parse(JSON.stringify(matrix))

  matrix.forEach((row, xAxis) => {
    matrix.forEach((column, yAxis) => {
      if (matrix[xAxis][yAxis] === 0) {
        zero_axises.push({
          x: xAxis,
          y: yAxis
        })
      }
    })
  })

  zero_axises.forEach((coord) => {
    change_horizontal(matrix, coord.x)
    change_vertical(matrix, coord.y)
  })

  return matrix
}

const change_vertical = (matrix, yAxis) => {
  matrix.forEach((row, idx, column) => {
    // third argument is the array and must be named differently
    column[idx][yAxis] = 0
  })
}

const change_horizontal = (matrix, xAxis) => {
  matrix[xAxis].forEach((element, idx, row) => {
    row[idx] = 0
  })
}

module.exports = zero_matrix
