# Given an image represented by an N*N matrix, where each pixel in the image
# is 4 bytes, write a method to rotate the image by 90 degrees, can you do it in place?

matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

def rotate90(matrix)
  new_matrix = []

  matrix.each_with_index do |row, xAxis|
    new_row = []
    matrix.each_with_index do |column, yAxis|
      new_row << matrix[yAxis][xAxis]
    end
    new_matrix << new_row
  end

  new_matrix
end


# p rotate90(matrix)


def rotate90_in_place(matrix)

end
