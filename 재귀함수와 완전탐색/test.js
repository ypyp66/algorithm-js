function solution(M, load) {
  let answer = Number.MAX_SAFE_INTEGER;
  let dp = new Array(load.length).fill(0);

  function DFS(v, sum, arr, cnt) {
    if (arr.length === 0) {
      answer = Math.min(answer, cnt);
      return;
    }

    if (arr.length === 1 && sum + arr[0] > M) cnt += 1;

    if (dp[v] > 0) return dp[v];

    console.log(v, sum, arr, cnt);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > M) {
        answer = -1;
        break;
      }
      dp[v] = sum + arr[i];

      if (dp[v] === M) {
        DFS(v + 1, 0, [...arr.slice(0, i), ...arr.slice(i + 1)], cnt + 1);
      } else if (dp[v] > M) {
        DFS(v + 1, 0, arr, cnt + 1);
      } else {
        DFS(
          v + 1,
          sum + arr[i],
          [...arr.slice(0, i), ...arr.slice(i + 1)],
          cnt
        );
      }
    }
  }

  if (load.some((x) => x > M)) {
    answer = -1;
    return answer;
  }

  DFS(0, 0, load, 0);
  return answer;
}

console.log(solution(5, [2, 2, 2, 2, 2]));
console.log(solution(10, [2, 3, 7, 8]));
console.log(solution(20, [16, 15, 9, 17, 1, 3]));
