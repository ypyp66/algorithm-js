/*
 */

(function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  let cnt = 0;

  while (queue.length > 1) {
    const temp = queue.shift();
    if (cnt === k - 1) {
      console.log(queue);
    } else {
      queue.push(temp);
    }

    cnt = (cnt + 1) % k;
  }

  console.log(...queue);
})(8, 3);
