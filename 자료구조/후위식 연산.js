/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.
▣ 입력예제 1 
352+*9-
▣ 출력예제 1
12

*/
(function solution(str) {
  str = [...str];
  const stack = [];
  const regex = /^[0-9]$/;

  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      stack.push(Number(str[i]));
    } else {
      let temp;
      const rt = stack.pop();
      const lt = stack.pop();

      switch (str[i]) {
        case "+":
          temp = lt + rt;
          break;
        case "-":
          temp = lt - rt;
          break;
        case "*":
          temp = lt * rt;
          break;
        case "/":
          temp = lt / rt;
          break;
      }

      stack.push(temp);
    }
  }
  console.log(...stack);
})("352+*9-");
