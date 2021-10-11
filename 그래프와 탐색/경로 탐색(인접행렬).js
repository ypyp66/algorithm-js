/*
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 
1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5
총 6 가지입니다. 

▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.
▣ 입력예제 1 
5 9
1 2 
1 3
1 4 
2 1 
2 3 
2 5 
3 4 
4 2 
4 5
▣ 출력예제 1
6

*/
(function solution(n, m, arr) {
  //1번에서 n번 까지 가는 경우의 수
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  //let graph = new Array(n + 1).fill([]);
  //const visited = [];
  let visited = new Array(n + 1).fill(false);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  console.log(graph);

  function DFS(v, visited, path) {
    visited[v] = true;
    if (v === n) {
      console.log(path);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && !visited[i]) {
          visited[i] = true;
          DFS(i, visited, [...path, i]);
          visited[i] = false;
        }
      }
    }
  }

  DFS(1, visited, [1]);
  console.log(answer);
})(5, 9, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]);
