/*
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격
자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격
자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
출발 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 도착
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
▣ 입력설명
7*7 격자판의 정보가 주어집니다.
▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.
▣ 입력예제 1 
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
▣ 출력예제 1
8
*/
(function solution(arr) {
  let cnt = 0;
  let visited = Array.from({ length: arr.length }, () =>
    new Array(arr.length).fill(false)
  );
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(row, col) {
    if (
      row < 0 ||
      row >= arr.length ||
      col < 0 ||
      col >= arr.length ||
      arr[row][col] === 1
    ) {
      return;
    }

    if (row === arr.length - 1 && col === arr.length - 1) {
      cnt++;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nextX = row + dx[i];
      const nextY = col + dy[i];

      arr[row][col] = 1; //지금 위치 방문처리
      DFS(nextX, nextY); //방문처리 된 채로 호출
      arr[row][col] = 0; //방문처리 해제

      // for문이 끝나면 현재위치는 방문되지 않은 상태로 남아있다
      // 다른 경로를 탐색하기 위해 뒤로 돌아올 때 0이어야만 방문이 가능하다
    }
  }

  DFS(0, 0);
  console.log(cnt);
})([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]);
