(function solution(board, moves) {
  let newBoard = [];
  let answer = [];
  let cnt = 0;

  const transpose = board.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

  const board_ = board.reduce((acc, cur, i) =>
    cur.map((item, j) => (item !== 0 ? [...acc[j], item] : []), [])
  );

  console.log(board_);

  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] !== 0) {
        temp = [...temp, board[j][i]];
      }
    }
    newBoard.push(temp);
  }

  for (let i of moves) {
    const temp = newBoard[i - 1].shift();

    if (temp === undefined) continue;
    if (temp === answer[answer.length - 1]) {
      answer.pop();
      cnt++;
      continue;
    }

    answer.push(temp);
  }

  console.log(answer, cnt * 2);
})(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
