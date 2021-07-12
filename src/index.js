module.exports = function solveSudoku(matrix) {

  function isValid(matrix, row, col, j) {
      for (let i = 0; i < 9; i++) {
          const forX = 3 * Math.floor(row / 3) + Math.floor(i / 3);
          const forY = 3 * Math.floor(col / 3) + i % 3;
          if (matrix[row][i] == j || matrix[i][col] == j || matrix[forX][forY] == j) {
              return false;
          }
      }
      return true;
  }

  for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
          if (matrix[i][k] == 0) {
              for (let z = 1; z <= 9; z++) {
                  if (isValid(matrix, i, k, z)) {
                      matrix[i][k] = z;
                      if (solveSudoku(matrix)) {
                          return matrix;
                      } else {
                          matrix[i][k] = 0;
                      }
                  }
              }
              return false;
          }
      }
  }
  return matrix;
}
