// 条件分岐
/*
if文とSwitch文がある
if (条件) {
  条件が成り立ったときの処理
} else {
  条件が成り立たなかったときの処理
}
*/
const num = Math.random() // 0.0〜1.0の数値をランダムに作る

// 0.5以上のときは大きめ
if (num >= 0.5) {
  console.log('大きめ')
}　else { // 0.5未満のときは小さめ
  console.log('小さめ')
}
console.log(`数: ${num}`)


// 真偽値
if (true) {
  console.log('必ずこちらが実行される')
} else {
  console.log('こちらは実行されない')
}

if (false) {
  console.log('今度はこちらが実行されない')
} else {
  console.log('こちらが実行される')
}


// 真偽値の書き方の具体例
const a = 2
const b = 3
console.log(a === b) //=> false
console.log(a !== b) //=> true
console.log(a < b) //=> true
console.log(a <= b) //=> true
console.log(a > b) //=> false
console.log(a >= b) //=> false

const c = 10
const d = 2 * 5
console.log(c === d) //=> true
console.log(c !== d) //=> false
console.log(c < d) //=> false
console.log(c <= d) //=> true
console.log(c > d) //=> false
console.log(c >= d) //=> true

console.log(a === b && c === d) //=> false
console.log(a === b || c === d) //=> true
console.log(!(a === b)) //=> false


// else if
const score = Math.random() * 100 // 0.0〜100.0の間の数値をランダムに作る

console.log(`点数: ${score}`)

if (score >= 90) {
  console.log('秀')
} else if (score >= 75) {   // 90点以上でなくても75点以上なら
  console.log('優')
} else if (score >= 60) {   // 75点以上でなくても60点以上なら
  console.log('良')
} else if (score >= 30) {
  console.log('可')
} else {
  console.log('不可')
}


// ループ
/*
JavaScriptのループには、for文、while文、forEachがある
*/

// for文(特定の回数繰り返す)
/*
for (初期化処理; 条件; 更新処理) {
  繰り返したい処理
}
for (let 変数 = 0; 変数 < 繰り返し回数; 変数++) {
  繰り返したい処理
}
*/
// 0から9までの数値を表示
for (let i = 0; i < 10; i++) {
  console.log(i)
}


// while文(ある条件を満たすまで繰り返す)
/*
while (ループを続ける条件) {
  繰り返したい処理
}
*/
// Sを2乗し続けて、Sが100000を超えたら終了
let s = 2 // letは「あとで書き換えできる（代入し直せる）」変数

while (s < 100000) {
  console.log(s)
  s = s * s
}


// forEach(配列の要素を1つずつ取り出してループ)
/*
配列.forEach((変数) => {
  各要素ごとに実行したい処理
})
*/
const friends = ['サーバル', 'フェネック', 'アライグマ']

friends.forEach((friend) => {
  console.log(friend)
})


// 関数

// 関数を作る（レシピを作る）
function cook(food1, food2) {   // cookは関数名
  console.log(food1 + 'を切ります。')
  console.log(food1 + 'を炒めます。')
  console.log(food2 + 'をすりおろします。')
  console.log(food1 + 'に' + food2 + 'を混ぜます。')
}

// 関数を呼び出す（料理を作る）
cook('豚肉', '生姜');   // 豚肉や生姜の部分を引数（ひきすう）という

// 引数の例
function foo(a, b, c) {
  console.log(`fooが引数${a}, ${b}, ${c}で呼び出された`)
}
function bar() {    // ゼロ引数関数
  console.log('barが呼び出された')
}
foo(1, 'abc', true) //=> fooが引数1, abc, trueで呼び出された
bar() //=> barが呼び出された


// 関数の戻り値
/*
処理の結果の値を呼び出したがわに返す
*/
// 消費税を計算する
function applyTax(price) {
  const result = price * 0.1 // 消費税率は10%
  return result
}
const tax = applyTax(12000)
console.log(tax) //=> 1200


// 関数の書き方(一例)
/*
function double(x) {
  return x * 2
}
// アロー関数を使うと
const double = (x) => {
  return x * 2
}
// 引数が1つだけのときは()を省略できる
const double = x => {
  return x * 2
}
// 関数の中身がreturnだけのときは{}を省略できる
const double = x => x * 2
*/
