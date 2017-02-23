// Given an image represented by an N*N matrix, where each pixel in the image
// is 4 bytes, write a method to rotate the image by 90 degrees, can you do it in place?


const matrix =[[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]


const rotate90 = (matrix) => {
  const new_matrix = []
  for (var xAxis = 0; xAxis < matrix.length; xAxis++) {
    const new_row = []
    for (var yAixs = 0; yAixs < matrix.length; yAixs++) {
      new_row.unshift(matrix[yAixs][xAxis])
    }
    new_matrix.push(new_row)
  }

  return new_matrix
}

const rotate90_in_place = (matrix) => {
  const last = matrix.length - 1
  for (var xAxis = 0; xAxis < Math.floor(matrix.length / 2); xAxis++) {

    for (var yAxis = last, inc = 0; yAxis >= 0; yAxis--, inc++) {
      let temp =  matrix[xAxis][last - inc]
      matrix[xAxis][last - inc] = matrix[yAxis][xAxis]
      matrix[yAxis][xAxis] = temp
    }

  }

  return matrix
}

console.log(rotate90(matrix))
// console.log(rotate90_in_place(matrix))
