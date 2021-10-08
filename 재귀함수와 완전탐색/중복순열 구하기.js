/*
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열
하는 방법을 모두 출력합니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1 
3 2
▣ 출력예제 1
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9
*/
/*
풀이
- 여기선 v가 index와 같다.
- m 길이의 배열을 선언한다.
- 1~n까지 반복하여 값을 arr[v]에 할당한다.
- v+1을 하여 다음 인덱스로 넘긴다.
- 만약 v가 m과 같다면 answer에 push한다.
*/
(function solution(n, m) {
  //1~n 중 m개
  const answer = [];
  let arr = new Array(m).fill(0);

  function DFS(v) {
    if (v === m) {
      answer.push([...arr]);
    } else {
      for (let i = 1; i <= n; i++) {
        arr[v] = i;
        DFS(v + 1);
      }
    }
  }

  DFS(0);
  console.log(answer);
})(3, 2);
