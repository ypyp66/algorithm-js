/*
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1 
3 2
3 6 9
▣ 출력예제 1
3 6
3 9
6 3
6 9
9 3
9 6
6
*/
/*
풀이
- answer 배열과 뽑은 값을 담을 sub 배열을 선언해준다.
- DFS함수를 정의 하고 초기 인자는 0과 숫자가 담긴 배열을 넣어 호출한다.
- DFS에서 v는 숫자의 갯수, temp는 배열이다.
- DFS에서 만약 v가 m과 같지 않다면 for문을 이용해 temp만큼 반복하여 sub[v]에 temp[i]를 넣고
  v+1과 기존 배열에서 arr[i]를 제외한 배열을 담아 DFS를 호출한다.
- DFS에서 v가 m과 같다면, answer에 sub를 push한다.
*/
(function solution(n, m, arr) {
  let answer = [];
  let sub = new Array(m).fill(0);

  console.time();

  function DFS(v, temp) {
    if (v === m) {
      answer.push([...sub]);
    } else {
      for (let i = 0; i < temp.length; i++) {
        sub[v] = temp[i];
        DFS(v + 1, [...arr.slice(0, i), ...arr.slice(i + 1)]);
      }
    }
  }

  DFS(0, arr);
  console.log(answer);
  console.timeEnd();
})(3, 2, [3, 6, 9]);
