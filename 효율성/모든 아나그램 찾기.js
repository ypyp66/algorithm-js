/*
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
▣ 입력예제 1 
bacaAacba
abc
▣ 출력예제 1
3

*/
/*
풀이
- target을 정렬한다.
- 시작 위치는 i, 끝 위치는 target의 길이-1 이다.
- temp라는 가변 변수에 매 반복문의 첫 요소로 초기화한다.
- while문을 이용해 끝 위치까지의 요소를 temp에 더해준다.
- temp를 배열에 담아 정렬후 합쳐서 문자열로 변환해준 다음 a에 담는다.
- target과 a가 같으면 answer에 push한다.
*/
(function solution(str, target) {
  const answer = [];
  target = [...target].sort().join("");

  for (let i = 0; i < str.length - 2; i++) {
    let temp = str[i];
    let rt = 1;

    while (rt < target.length) {
      temp += str[i + rt++];
    }

    const a = [...temp].sort().join("");
    if (a === target) answer.push(a);
  }
  console.log(answer, answer.length);
})("bacbAacba", "cbA");
