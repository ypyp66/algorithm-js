/*
가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼
의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3 
1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
                            3 1 2 4
                             4 3 6
                              7 9
                               16
N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하
시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의
미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.
▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재
하지 않는 경우는 입력으로 주어지지 않는다.
▣ 입력예제 1 
4 16
▣ 출력예제 1
3 1 2 4
*/
/*
해설
- 해당 인덱스 숫자 * n-1C(0~n-1) 의 합과 같다.
- 먼저 n개 에서 1~(n-1)개 뽑을 때의 경우의 수를 구한다
- n개 에서 n개를 뽑을 때의 경우를 sub배열에 저장한다.
- 재귀를 이용해 level, sum, 숫자 배열을 인자로 넘겨준다.
- sub[level] 에 숫자 배열의 0번을 넣고 합을 구하고, 나머지 숫자 배열을 DFS에 넘겨준다
- 도중 합이 last보다 크면 중지 시키고 같다면 answer에 push해준다.
- 가장 처음 만족한 것이 답이다.
*/
(function solution(n, last) {
  let answer = [];

  let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let nums = Array.from({ length: n }, (_, i) => i + 1);
  let combs = [];
  let sub = [];

  function Combination(n, r) {
    if (dp[n][r] > 0) return dp[n][r]; //값이 있다면 그 값을 사용
    if (n === r || r === 0) return 1;
    return (dp[n][r] = Combination(n - 1, r - 1) + Combination(n - 1, r)); // 계산과 동시에 배열에 값을 저장
  }

  function DFS(L, sum, arr) {
    if (sum > last) return;
    if (L === n && sum === last) {
      answer.push([...sub]);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        sub[L] = arr[i];
        DFS(L + 1, sum + combs[L] * sub[L], [
          ...arr.slice(0, i),
          ...arr.slice(i + 1),
        ]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    combs[i] = Combination(n - 1, i);
  }
  DFS(0, 0, nums);
  console.log(answer[0]);
})(4, 16);
