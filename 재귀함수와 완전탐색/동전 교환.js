/*
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
▣ 입력예제 1 
3
1 2 5
15
▣ 출력예제 1
3
*/
(function solution(n, coins, m) {
  //n:동전 갯수, m:거슬러 줄 금액
  let answer = Number.MAX_SAFE_INTEGER;
  console.time();
  function DFS(cnt, sum) {
    if (sum >= m) {
      answer = Math.min(cnt, answer);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(cnt + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  console.log(answer);
  console.timeEnd();
})(4, [1, 2, 5, 10], 15);
