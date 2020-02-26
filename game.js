const generate2DArray = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};



const randomFillWithX = (matrix, num) => {
  for (let i = 0; i < num; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix[0].length);
    if (matrix[y][x] !== 'X') {
      matrix [y][x] = 'X';
    } else {
      i--;
    }
    
  }
};

