const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

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
        if (matrix[i][j] !== '*' && matrix[i][j] !== 'p') {
          matrix[i][j] = filler;
        }
      }
    }
  };

  const print2DArray = (matrix) => {
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
    matrix[player.line][0] = 'p';
  }

  let getPlayerLine = (player) => {
    return player.line;
  }

  let movePlayer = (player, direction, matrix) => {
    if (direction === 'up' && player.line >0) {
      player.line--;
    } else if (direction === 'down' && player.line < matrix.length) {
      player.line++;
    }
  }

  let collision = (matrix, player) => {//hogy érnek össze?
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === player.line && matrix[i][0] === '*') {
       //if (matrix[player.line] === '*'){
        print2DArray(array);
        console.log('VÉGE')
        process.exit();
      }
    }
  }

  let array = generate2DArray(20, 20);
  fill2DArray(array, '.');
  let player = { line: 10 };
  generateFireball(array);
  placePlayer(array, player);
  print2DArray(array);

  stdin.on('data', (key) => {
    if (key === 'w') {
      movePlayer(player, 'up', array)
    }
    if (key === 's') {
      movePlayer(player, 'down', array);
    }
    if (key === 'q') {
      process.exit();
    }
  });
  setInterval(() => {
    console.clear();
    shiftPush(array);
    collision(array, player);
    placePlayer(array, player);
    fill2DArray(array, '.');
    generateFireball(array);
    print2DArray(array);
  }, 1000);
