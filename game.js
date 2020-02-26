const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const generateMatrix = (n, m) => {
  const matrix = new Array(n);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(m);
  }
  return matrix;
};
const shiftPush = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].shift();
    matrix[i].push('');
  }
}

  const fillMatrix = (matrix, filler) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== '*' && matrix[i][j] !== 'P') {
          matrix[i][j] = filler;
        }
      }
    }
  };

  const printMatrix = (matrix) => {
    let oneLine = '';
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        oneLine += matrix[i][j];
      }
      console.log(oneLine);
      oneLine = '';
    }
    console.log();
  };
  const generateFireball = (matrix) => {
    const line = Math.floor(Math.random() * matrix.length);
    matrix[line][matrix[0].length - 1] = '*';
  }

  let placePlayer = (matrix, player) => {
    matrix[player.line][0] = 'P';
  }

  let movePlayer = (player, direction, matrix) => {
    if (direction === 'up' && player.line >0) {
      player.line--;
    } else if (direction === 'down' && player.line < matrix.length) {
      player.line++;
    }
  }

  let checkCollision = (matrix, player) => {//hogy érnek össze?
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === player.line && matrix[i][1] === '*') {
       //if (matrix[player.line] === '*'){
        printMatrix(matrix);
        console.log('VÉGE')
        process.exit();
      }
    }
  }

  const init = () => {
    fillMatrix(matrix, '.');
    generateFireball(matrix);
    placePlayer(matrix, player);
    printMatrix(matrix);
  }

  const keyProcessor = () => {
    stdin.on('data', (key) => {
    if (key === 'w') {
      movePlayer(player, 'up', matrix)
    }
    if (key === 's') {
      movePlayer(player, 'down', matrix);
    }
    if (key === 'q') {
      process.exit();
    }
  });}

  const loop = () => {
    setInterval(() => {
    console.clear();
    shiftPush(matrix);
    checkCollision(matrix, player);
    placePlayer(matrix, player);
    fillMatrix(matrix, '.');
    generateFireball(matrix);
    printMatrix(matrix);
  }, 1000)}

  let player = { line: 10 };
  let matrix = generateMatrix(20, 20);

  init();
  loop();
  keyProcessor();