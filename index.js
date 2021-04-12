// 関数型プログラミング
const add2 = x => x + 2 // 引数xに2を足す関数
const mul2 = x => x * 2 // 引数xに2を掛ける関数

const n = 3
console.log(add2(n)) //=> 5
console.log(mul2(n)) //=> 6
console.log(mul2(add2(n))) //=> 10（3に2を足してから、その結果に2を掛ける）

// アロー関数（->）のおさらい
const add2 = x => x + 2

function add2(x) {
  return x + 2
}


// 高階関数（関数を受け取る関数） ...コールバック関数
const add2 = x => x + 2  // add2関数を定義

function twice(f, x) {  // 引数fの関数を、引数xの値に対して2回呼び出す
  return f(f(x))
}

const result = twice(add2, 10)  // 関数名にカッコをつけずに書くと、その関数そのものを値として使うことができる
console.log(result) //=> 14

// 高階関数の具体例① 配列のmap
// 配列のすべての要素を二乗する
const list = [1, 2, 3]
const square = x => x * x // 引数xを二乗する

console.log(list.map(square)) //=> [1, 4, 9]

// 無名関数
const list = [1, 2, 3]
console.log(list.map(x => x * x)) // x => x * x の部分が無名関数
// functionを使うと
const list = [1, 2, 3]
console.log(list.map(function (x) { return x * x })) // function (x) { return x * x } の部分が無名関数


// 高階関数の具体例② イベントリスナの登録
// ボタンを押したときに処理を実行する
const button = document.querySelector('#submit')

button.addEventListener('click', event => { /* クリックしたときの処理 */ })
/*
addEventListenerが高階関数です。第2引数に、ボタンがクリック実行する処理を関数として渡します（これも無名関数です）。
「ボタンのクリック」のような任意のタイミングで発生する事象を「イベント」と呼び、イベントが発生したときに実行される関数を「イベントリスナ」と呼びます。
イベントリスナは、イベントが発生する前にあらかじめ登録しておく必要がありますが、その登録処理(addEventListener)に高階関数が使われています。
*/
