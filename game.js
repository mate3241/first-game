const generate2DArray = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};


const print2DArray = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      process.stdout.write(matrix[i][j]);
    }
    console.log();
  }
};