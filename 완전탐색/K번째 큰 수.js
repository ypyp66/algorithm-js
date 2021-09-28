/*
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 
여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값
은 22입니다.

▣ 입력설명
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력
된다.
▣ 출력설명
첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.
▣ 입력예제 1 
10 3
13 15 34 23 45 65 33 11 26 42
▣ 출력예제 1
143
*/

/*
풀이
- n장 중 3개를 뽑아야하므로 3중첩 반복문을 실행해야한다.
- 뽑은 것은 또 뽑을 수 없으므로 매 반복문은 이전 요소의 다음 요소부터 시작한다.
*/

// (function solution(n, k, arr) {
//   let answer = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         const temp = [arr[i], arr[j], arr[k]];

//         answer.add(temp.reduce((acc, cur) => acc + cur, 0));
//       }
//     }
//   }

//   console.log([...answer].length, [...answer].sort((a, b) => b - a)[k - 1]);
// })(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);

//조합방식으로 풀기 (순서가 없는 방식)
(function solution(n, k, arr) {
  const getCombinations = (array, selectedNumber) => {
    const result = [];

    if (selectedNumber === 1) {
      return array.map((item) => [item]);
    }

    array.forEach((i, index, origin) => {
      //i는 요소, origin은 array
      const rest = origin.slice(index + 1); //i 다음 요소들을 return
      const combinations = getCombinations(rest, selectedNumber - 1);
      const attached = combinations.map((combination) => [i, ...combination]);
      result.push(...attached);
    });
    return result;
  };

  const sum = [
    ...new Set(
      getCombinations(arr, k).map((item) =>
        item.reduce((acc, cur) => acc + cur, 0)
      )
    ),
  ].sort((a, b) => b - a);

  console.log(sum, sum[k - 1]);
})(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
