/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 
프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
남은 문자만 출력한다.
▣ 입력예제 1 
(A(BC)D)EF(G(H)(IJ)K)LM(N)
▣ 출력예제 1
EFLM

*/
/*
풀이
- lt, rt를 정의함, lt는 (, rt는 )를 의미
- str을 반복하면서 ( 일때 lt를 증가, ) 일때 rt를 증가
- 둘 다 아니라면 lt, rt를 비교해서 lt, rt가 같다면 stack에 push

동영상 풀이
- ) 일 때, stack에서 while문을 통해 stack에서 ( 가 나올때 까지 pop
- 이외의 경우는 push
*/
(function solution(str) {
  //   let lt = 0;
  //   let rt = 0;
  //   const stack = [];

  //   for (let i of str) {
  //     if (i === "(") {
  //       lt++;
  //     } else if (i === ")") {
  //       rt++;
  //     } else {
  //       if (lt === rt) {
  //         stack.push(i);
  //       }
  //     }
  //   }

  //   console.log(stack.join(""));
  let answer;
  let stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "("); //stack.pop()이 '('가 아니면 참, 계속 반복, '('가 나올때까지
    } else stack.push(x);
  }
  answer = stack.join("");

  console.log(answer);
})("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
