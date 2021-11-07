(function () {
  let answer = "";
  let queue = [];

  queue.push(1);

  while (queue.length) {
    const v = queue.shift();
    if (v > 7) break;
    answer += `${v} `;
    queue.push(2 * v);
    queue.push(2 * v + 1);
  }

  console.log(answer);
})();
