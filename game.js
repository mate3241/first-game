const generate2DArray = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
const shiftPush = (array) => {
  for (let i = 0; i < array.length; i++) {

    array[i].shift();
    array[i].push('');

  }
}
const fill2DArray = (matrix, filler) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== '*' && matrix[i][j] !== 'p'){
      matrix[i][j] = filler;
      }
    }
  }
};

const print2DArray = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      process.stdout.write(matrix[i][j]);
    }
    console.log();
  }
  console.log();
};
let array = generate2DArray(20, 20);
array[2][3] = '*';
fill2DArray(array, '.');
print2DArray(array);
setInterval(() => {
  console.clear();
  shiftPush(array);
  fill2DArray(array, '.');
  print2DArray(array);
}, 2000);
