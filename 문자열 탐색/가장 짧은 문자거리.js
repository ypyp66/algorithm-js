/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요. 

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제 1 
teachermode e
▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0

▣ 입력예제 2
ajddhekkfkkkkefllflejf f
▣ 출력예제 2
8765432101232101101210

*/

(function solution(str, t) {
  let answer = [];
  let q = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      answer[i] = 0;
      continue;
    }
    q.push([str[i], 1]);

    while (q.length > 0) {
      //bfs로 구현하기
      const [c, num] = q.shift();
      const left = i - num;
      const right = i + num;

      if (c === undefined) continue;

      if (c !== t) {
        q.push([str[left], num + 1], [str[right], num + 1]);
      }

      if (c === t) {
        answer[i] = num - 1;
        q = [];
      }
    }
  }

  console.log(answer);
})("teachermode", "e");
