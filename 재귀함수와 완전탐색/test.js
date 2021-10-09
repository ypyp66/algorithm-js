const a = Array.from({ length: 10000 }, (_, i) => i + 1);

console.time();

console.log(a.filter((item) => item !== 100));
console.timeEnd();

console.time();
console.log([...a.slice(0, 100), ...a.slice(100)]);
console.timeEnd();
