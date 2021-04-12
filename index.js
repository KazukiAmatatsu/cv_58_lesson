// オブジェクト指向プログラミング

// 具体例：文字列処理
// 文字列を大文字にする
const str = "This is a pen." // もの＝文字列を作る

// "This is a pen."という「もの」に、toUpperCaseという「操作」をする。
// 結果もまた「もの」
const upperStr = str.toUpperCase()

console.log(upperStr) //=> THIS IS A PEN.

// 文字列を小文字にする
const lowerStr = upperStr.toLowerCase()

console.log(lowerStr) //=> this is a pen.


// メソッドチェーン
const str = "This is a pen."

console.log(str.toUpperCase().toLowerCase()) //=> this is a pen.


// メソッドと関数
const str = 'This is a pen.'

console.log(str.slice(1, 3)) //=> his
console.log(str.slice(8, 13)) //=> a pen

/*
メソッドとは
javaSprictがあらかじめ用意した関数を呼び出すこと
構文とメソッドの違いは[.]が付くか付かないか
*/


// 授業内で扱ったメソッド
window.alert('ara-todayo');
window.confirm('ara-todayo');

if (window.confirm('ara-todayo')) {
  console.log('trueきた');
} else {
  console.log('falseきた');
}


// じゃんけんゲーム
const yourHand = window.prompt('0~2の数字を入力してください');

if (yourHand % 3 === 0) {
  console.log('勝ちました');
} else if (yourHand % 3 === 1) {
  console.log('負けました');
} else if (yourHand % 3 === 2) {
  console.log('あいこです.');
} else {
  console.log('あなたとはじゃんけんしません');
}
