// オブジェクト
// オブジェクトの値を作る→yamada変数に代入
const yamada = { id: 123, name: 'Taro Yamada', age: 24 }

// プロパティへのアクセス
console.log(yamada.id) //=> 123
console.log(yamada.name) //=> Taro Yamada
console.log(yamada.age) //=> 24
// id・name・ageなどをプロパティという

// 変数名として使えない @ や 1st などは、引用符で囲む
// 単一引用符(')、二重引用符(")どちらでもOK
const top3 = { '@': 'Japan', '1st': 'Tokyo', "2nd": 'Kanagawa', "3rd": 'Osaka' }

// アクセスのときも top.@ や top3.1st のようには書けない
// 配列の要素のアクセスに似た [] を使う
console.log(top3['@']) //=> Japan
console.log(top3['1st']) //=> Tokyo
console.log(top3['2nd']) //=> Kanagawa
console.log(top3['3rd']) //=> Osaka

// オブジェクトは変数に代入したり、関数の引数にすることも可能
const yamada = { id: 123, name: 'Taro Yamada', age: 24 }
const tanaka = { id: 456, name: 'Jiro Tanaka', age: 32 }

function printUser(user) {
  console.log(`${user.name}さん(ID:${user.id})は${user.age}歳です。`)
}

printUser(yamada) //=> Taro Yamadaさん(ID:123)は24歳です。
printUser(tanaka) //=> Jiro Tanakaさん(ID:456)は32歳です。

// プロパティの追加や書き換え
const obj = { a: 1 }

obj.b = 2 // プロパティの追加
obj.a = 100 // プロパティの値の変更
obj['c'] = 'foo' // [] を使った書き方もOK

console.log(obj) //=> { a: 100, b: 2, c: "foo" }


// オブジェクトと配列の組み合わせ
const users = [
  { id: 1, name: 'Taro', comments: ['hello', 'world'] },
  { id: 2, name: 'Jiro', comments: ['looks good to me'] },
  { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]

// ２番目の要素を取り出す
console.log(users[1]); //=> { id: 2, name: 'Jiro' comments: [] }
// usersの2番目の要素のnameプロパティの値
console.log(users[1].name) //=> Jiro
// usersの2番目の要素のcommentプロパティの1番目の要素
console.log(users[1].comments[0]) //=> looks good to me



// JSON
/*
JavaScriptと比べると以下のような制約があります。

・すべてのプロパティを二重引用符(")で囲む必要がある
・文字列に使えるのも二重引用符(")のみで、単一引用符(')やテンプレート文字列(`)は使えない
・配列やオブジェクトの要素の最後に,を書いてはいけない
・JSONはプログラミング言語ではないため、処理は書けない（HTMLなどと一緒の部類）
*/
[
  { "id": 1, "name": "Taro", "comments": ["hello", "world"] },
  { "id": 2, "name": "Jiro", "comments": ["looks good to me"] },
  { "id": 3, "name": "Saburo", "comments": ["hi", "yes", ":)"] }
]


// JavaScriptのオブジェクトをJSONにする（エンコード）
const users = [
  { id: 1, name: 'Taro', comments: ['hello', 'world'] },
  { id: 2, name: 'Jiro', comments: ['looks good to me'] },
  { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]

const json = JSON.stringify(users) //  avaScriptのオブジェクトをJSONにするにはJSON.stringify

console.log(json) //=> (JSON化されたオブジェクト)


// JSONからJavaScriptのオブジェクトにする（デコード）
const json = `
[
  { "id": 1, "name": "Taro", "comments": ["hello", "world"] },
  { "id": 2, "name": "Jiro", "comments": ["looks good to me"] },
  { "id": 3, "name": "Saburo", "comments": ["hi", "yes", ":)"] }
]
`
const users = JSON.parse(json) //  JSONからJavaScriptのオブジェクトにするにはJSON.parse

console.log(users) //=> (JavaScriptの配列)
