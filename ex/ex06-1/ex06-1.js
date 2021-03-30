const add3 = n => n + 3;
const sub5 = n => n - 5;
const mul100 = n => n * 100;
const mul8 = n => n * 8;

const n = 2;  // 動作確認
console.log(sub5(mul100(n)));  // n * 100 - 5
console.log(add3(mul8(add3(n))));  // (n + 3) * 8 + 3
