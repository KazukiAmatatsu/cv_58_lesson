// DOMのAPI

// windowとDocument
// アラート表示
window.alert('これはwindow.alert()で表示したアラートです')

// window. に限り、省略することができる。
alert('これはalert()で表示したアラートです')

// documentのプロパティにアクセスする例
console.log(document.doctype) //=> <!doctype html>
console.log(document.title) //=> DOM API


/*
document.getElementById(ID): HTML側にid="xxx"のように書いておき、そのIDを指定して要素を取得します。

document.querySelector(セレクタ): CSSと同じ「セレクタ」の書き方で要素を探し、始めに見つかった要素を取得します。

document.querySelectorAll(セレクタ): querySelectorとほぼ同じですが、こちらはセレクタに合致する要素をすべて取得します。
*/


// 要素を見つける

// <p id="intro">...</p>要素を取得
const intro = document.getElementById('intro')
console.log(intro.textContent) //=> これは紹介文です。

// <ul class="list">...</ul>要素を取得
const list = document.querySelector('.list')
console.log(list.children.length) //=> 3

// <ul class="list">...</ul>の中にある<li>要素を取得
const items = document.querySelectorAll('.list li')
// itemsは配列（のようなもの）なので、forEachで繰り返しができる
items.forEach((item) => {
  console.log(item.textContent) // アイテム1, アイテム2, アイテム3 が順番に表示される
})

// 要素の情報を取得する、操作する

/*
elem.textContent: タグで囲まれた中身のテキストを取得します。
elem.textContent = "..."とすることで中身のテキストを書き換えることができます。

elem.innerHTML: タグで囲まれた中身のHTMLを取得します。
elem.innerHTML = "..."とすることで中身のHTMLを書き換えることができます。

elem.children: 子要素の配列（のようなもの）を取得します。
elem.firstElementChild: 子要素のうち、最初に書かれている要素を取得します。
elem.lastElementChild: 子要素のうち、最後に書かれている要素を取得します。
elem.parentElement: 親要素を取得します。

elem.getAttribute(属性): <タグ 属性="値">の属性の部分を引数に渡して、値の部分を取得します。
elem.setAttribute(属性, 値): 属性と値を引数に渡すと、それがHTMLに<タグ 属性="値">のように反映されます。
*/

const elem = document.querySelector('.list')

console.log(elem.textContent) //=> アイテム1 アイテム2 アイテム3
console.log(elem.innerHTML) //=> <li>アイテム1</li><li>アイテム2</li><li>アイテム3</li>
for (let i = 0; i < elem.children.length; i++) { // for文での繰り返し
  console.log(elem.children[i]) // <li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
}
console.log(elem.firstElementChild) //=> <li>アイテム1</li>
console.log(elem.lastElementChild) //=> <li>アイテム3</li>
console.log(elem.parentElement) //=> <body>...</body>

const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src')) //=> https://placehold.it/200x200
elem2.setAttribute('src', 'https://placehold.it/400x200') // 表示される画像が変わる


// 子要素を追加・削除する
/*
document.createElement(タグ名): タグ名で指定したタグの要素を作成します。作成した時点では、HTMLにはまだ追加されていない点に注意してください。
elem.appendChild(子要素): elemに子要素で指定した要素を子要素として追加します。
elem.removeChild(子要素): elemの子要素から子要素で指定した要素を削除します。
*/

const list = document.querySelector('.list') // ※既に書いている場合は省略
const newItem = document.createElement('li') // <li>要素を作成（まだHTMLには追加されない）
newItem.textContent = '新しいアイテム'

list.appendChild(newItem) // リストの最後に「新しいアイテム」が増える

list.removeChild(list.firstElementChild) // リストの最初の「アイテム1」が消える


// イベント
/*
elem.addEventListener(イベント名, イベントリスナ): イベント名のイベントが発生したときに実行したい処理を、関数としてイベントリスナに渡す。
*/

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('.list') // ※既に書いている場合は省略

addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
  const newItem = document.createElement('li')
  newItem.textContent = '新しいアイテム'
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
  list.removeChild(list.lastElementChild)
})
