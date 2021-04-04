const newItem_h1 = document.createElement('h1')
newItem_h1.textContent = 'DOM'
document.body.appendChild(newItem_h1)


const newItem_p = document.createElement('p')
newItem_p.textContent = 'JavaScriptからHTMLを扱うための仕組み'
document.body.appendChild(newItem_p)


const newItem_h2 = document.createElement('h2')
newItem_h2.textContent = '印象に残っているトピック'
document.body.appendChild(newItem_h2)


const newItem_ul = document.createElement('ul')
document.body.appendChild(newItem_ul)

const newItem_li1 = document.createElement('li')
newItem_li1.textContent = 'documentオブジェクト'
document.querySelector('ul').appendChild(newItem_li1)

const newItem_li2 = document.createElement('li')
newItem_li2.textContent = 'getElementById'
document.querySelector('ul').appendChild(newItem_li2)

const newItem_li3 = document.createElement('li')
newItem_li3.textContent = 'イベントリスナ'
document.querySelector('ul').appendChild(newItem_li3)
