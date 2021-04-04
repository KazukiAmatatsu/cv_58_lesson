// HTMLの特定の`<h1>`タグの中身のテキストを変える
const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)

const list = document.querySelector('.list')
console.log(`<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。`)

// HTMLの特定の`<ul>`タグの中に`<li>`タグを追加する
const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)

// HTMLの特定の`<button>`タグがクリックされたときに確認アラートを表示する
const button = document.getElementById('#button')
document.addEventListener('click', event => {
  confirm("削除してよろしいですか？") // 実際は削除しない
})



// documentオブジェクト
// JavascriptからDOMへアクセスするための入り口になるオブジェクト

// 要素を取り出す
const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)
// getElementByIdはHTMLのid属性を指定して要素を取り出す
/*
titleが<h1 id="title">買い物リスト</h1>タグを表すオブジェクト。
titleを通じて、<h1>要素の情報にアクセスしたり、操作ができます。
*/


const list = document.querySelector('.list')

console.log(`<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。`)
/*
document.querySelectorでも要素を取り出すことができる。
querySelectorでは、CSSのセレクターと同じ記法で要素を特定しとりだすことが可能。

childrenプロパティは、その要素の子要素を、配列（のようなもの）として取り出すことができます。
例えば、2番目の子要素にアクセスしたければ、上記のようにchildren[1]と書きます。
ある要素の親要素にアクセスしたければ、parentNodeプロパティを使います。
*/


// 要素の追加
const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)
/*
document.createElementを使うと、HTML要素をJavaScript側で作ることができる。
textContentプロパティの値を設定することで、その要素の<li>ここ</li>にあたる部分を上書きすることができる。
appendChildメソッドは、その要素に引数で指定した子要素を追加するメソッド
*/


// イベントリスナ
const button = document.getElementById('#button')
document.addEventListener('click', event => {
  confirm("削除してよろしいですか？") // 実際は削除しない
})

// addEventListerメソッドで、あるイベントが発生したときに実行したい処理（イベントリスナ）を登録するすることができる。
