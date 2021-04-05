// 「追加」ボタンを押すと、<ul id="list">の最後に<li>要素が追加される。このとき、<li>のテキストはアイテム1, アイテム2, ...のようにその要素が何番目かに応じて番号を振る。
// 「削除」ボタンを押すと、<ul id="list">の最後の<li>要素が削除される。ただし、1つも<li>要素がなくても、コンソールにエラーが表示されないようにする。

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

addButton.addEventListener('click', (event) => {
  const newItem = document.createElement('li')
  newItem.textContent = `アイテム${list.children.length + 1}`
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => {
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild)
  }　else {
    console.log('削除できる要素はありません');
  }
})
