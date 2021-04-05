const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

addButton.addEventListener('click', (event) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <img src="http://placehold.it/64x64" alt="アイテム${list.children.length + 1}">
  <span>アイテム${list.children.length + 1}</span>
  `
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => {
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild)
  }　else {
    console.log('削除できる要素はありません');
  }
})
