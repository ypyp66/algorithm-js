/*
합이 같은 부분집합(DFS : 아마존 인터뷰)
N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 
두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 
”NO"를 출력하는 프로그램을 작성하세요.
둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주
어진 원래의 집합이 되어야 합니다.
예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 
16으로 같은 경우가 존재하는 것을 알 수 있다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000
이하입니다.
▣ 출력설명
첫 번째 줄에 “YES" 또는 ”NO"를 출력한다.
▣ 입력예제 1 
6
1 3 5 6 7 10 
▣ 출력예제 1
YES

*/
/*
풀이
- sum이 target과 같으면 answer에 YES를 대입하고 함수 호출을 종료한다.
- 만약 v가 배열 길이-1 보다 작으면 v를 포함 했을때, 안 했을때 나눠서 DFS를 호출한다.
*/
(function solution(n, arr) {
  let answer = "NO";
  const target = arr.reduce((acc, cur) => acc + cur, 0) / 2;

  function DFS(v, sum) {
    if (sum === target) {
      answer = "YES";
      return;
    }
    if (v >= arr.length) {
      return;
    } else {
      DFS(v + 1, sum + arr[v]);
      DFS(v + 1, sum);
    }
  }
  DFS(0, 0);
  console.log(answer);
})(6, [1, 3, 4, 7]);
