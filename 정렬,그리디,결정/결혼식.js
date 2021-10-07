/*
현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 
수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 
것이고 15시 정각에는 존재하지 않는다고 가정합니다.

▣ 입력설명
첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가
는 시간이 음이 아닌 정수로 표현됩니다.
▣ 출력설명
첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.
▣ 입력예제 1 
5
14 18
12 15
15 20
20 30
5 14
▣ 출력예제 1
2
*/
/*
풀이
- 기존 배열을 이용해 [도착시간, s], [떠나는시간, e]의 형태로 이루어진 timeline 배열을 만든다.
- timeline 배열을 정렬하되, 시간이 같은 경우 떠나는 사람은 포함하면 안되니 e가 먼저 오도록 정렬한다.
- 정렬된 배열을 순회하면서 s인 경우 +1, e인경우 -1을 하여 동시간대 있는 사람의 수를 카운트 해준다.
- 반복의 마지막에는 answer와 값을 비교하여 더 큰 경우를 대입한다.
*/

(function solution(arr) {
  //    arr.sort((a, b) => a[0] - b[0]);
  //   let cnt = 0;
  //   let t = Number.MAX_SAFE_INTEGER;

  //   for (let i = 0; i < arr.length; i++) {
  //     let temp = 1;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (i === j) continue;

  //       if (arr[i][0] <= arr[j][0] && arr[i][1] > arr[j][0]) {
  //         temp++;
  //       }
  //     }

  //     cnt = Math.max(cnt, temp);
  //   }
  //   console.log(cnt);

  let answer = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  const timeline = [];

  for (let i of arr) {
    timeline.push([i[0], "s"]);
    timeline.push([i[1], "e"]);
  }

  timeline.sort((a, b) =>
    a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]
  );

  for (let i of timeline) {
    if (i[1] === "s") cnt++;
    else cnt--;

    answer = Math.max(answer, cnt);
  }

  console.log(answer);
})([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
