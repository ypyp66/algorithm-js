(function (arr) {
  let answer = 0;
  const queue = [];
  const n = arr.length;
  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];

  console.time();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        queue.push([i, j]);

        answer += 1;

        while (queue.length) {
          const [x, y] = queue.shift();
          arr[x][y] = 0;

          for (let k = 0; k < 8; k++) {
            const nextX = x + dx[k];
            const nextY = y + dy[k];

            if (
              nextX < 0 ||
              nextX >= n ||
              nextY < 0 ||
              nextY >= n ||
              arr[nextX][nextY] === 0
            )
              continue;

            queue.push([nextX, nextY]);
          }
        }
      }
    }
  }

  console.timeEnd();
  console.log(answer);
})([
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]);
