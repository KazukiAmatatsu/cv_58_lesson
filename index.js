// console.log(出力したい内容);
console.log("Hello World");

// 計算もできる
console.log(1 + 2);
console.log(10 - 4 * 8);

// コメントアウト
/*
改行もできるコメントアウト
*/

console.log(100) // 数値
console.log('hello') // 文字列
console.log([1, 2, 3, 4, 5]) // 配列
console.log(true) // 真偽値
console.log(null) // 無
console.log({ one: 1, two: 2 }) // オブジェクト


// 変数
// const 名前 = 値
const answer = 42
console.log(answer);  //=> 42

//nameは他で使われるタグ？だから横線
const name = "Taro Yamada" // 文字列
const isValid = true       // 真偽値
const userIds = [1, 3, 10] // 配列
console.log(name) //=> Taro Yamada
console.log(isValid) //=> true
console.log(userIds) //=> [1, 3, 10]

// エスケープ
// アポストロフィを書きたい場合
"You're a JavaScriot master!";
'You\'re JavaScript master!';

// 改行
console.log("abc\ndef"); //=> abc
                        //=> def

console.log("\\はバックスラッシュという記号です"); //=> \はバックスラッシュという記号です

// 文字列結合
const brealfast = "トースト"
console.log("今日の朝ごはんは"　+ breakfast + "でした");

// テンプレート文字列
const breakfast = "納豆ごはん"
console.log(`今日の朝ごはんは${breakfast}でした。`) //=> 今日の朝ごはんは納豆ごはんでした。
console.log(`8 + 7 = ${8 + 7}`) //=> 8 + 7 = 15
// テンプレート文字列は改行がそのまま書ける
const html = `
<div class="container">
  <p>test</p>
</div>
`
console.log(html);

// 配列
const days = [
  '日',
  '月',
  '火',
  '水',
  '木',
  '金',
  '土', // ←ここに , を書いてもOK（書かなくてもOK）
]

// 配列の中の要素の数
console.log(days.length) //=> 7

// 配列の中の個別の要素
console.log(days[0]) //=> 日
console.log(days[1]) //=> 月
console.log(days[2]) //=> 火
console.log(days[3]) //=> 水
console.log(days[4]) //=> 木
console.log(days[5]) //=> 金
console.log(days[6]) //=> 土
console.log(days[7]) //=> undefined
// インデックスは０から数える

// 配列の操作
const nengou = ['明治', '大正', '昭和', '平成']

nengou.push('令和') // 配列に要素を「追加」する
console.log(nengou) //=> ['明治', '大正', '昭和', '平成', '令和']

// 配列から要素を「削除」する
nengou.splice(3, 1) // 3は削除したい要素のインデックス、1は削除したい要素の数
console.log(nengou) //=> ['明治', '大正', '昭和', '令和']

// 配列の特定の要素を直接書き換える
nengou[2] = '照和'
console.log(negou) //=> ['明治', '大正', '照和', '令和']
