/*
이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 
풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩
니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. (해당문제는 
해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

▣ 입력설명
첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다. 
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.
▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.
▣ 입력예제 1 
5 20
10 5
25 12
15 8
6 3
7 4
▣ 출력예제 1
41
*/
(function solution(n, m, arr) {
  //m은 제한시간
  let answer = 0;

  function DFS(v, sum, time) {
    if (time <= m) {
      //시간이 m보다 작으면 (같지 않을 수 있으므로)
      answer = Math.max(answer, sum); //기존 answer와 비교하여 더 큰 값을 대입
    }
    if (v > n) return;
    //v가 문제의 길이보다 커지면 리턴
    else {
      DFS(v + 1, sum + arr[v][0], time + arr[v][1]); //해당 문제를 풀 경우
      DFS(v + 1, sum, time); //해당 문제를 풀지 않았을 경우
    }
  }
  DFS(0, 0, 0);
  console.log(answer);
})(5, 20, [
  [5, 20],
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
