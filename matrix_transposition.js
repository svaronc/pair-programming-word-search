const transpose = function (matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new matrix with switched rows and columns
  const transposedMatrix = [];
  // for loop create the array inside
  for (let i = 0; i < numCols; i++) {
    transposedMatrix[i] = [];
    // nesteed loop to asign the value of the original matrix
    for (let j = 0; j < numRows; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  let result = [];
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = { transpose, printMatrix };

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
