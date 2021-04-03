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
titleが<h1 id="title">買い物リスト</h1>タグを表すオブジェクトです。titleを通じて、<h1>要素の情報にアクセスしたり、操作ができます。

上記の例では、textContentプロパティで、開始タグ〜終了タグ内に書いたテキスト（買い物リスト）を取得しています。
*/
