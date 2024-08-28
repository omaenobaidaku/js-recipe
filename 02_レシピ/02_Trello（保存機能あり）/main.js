const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

let memos = []

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    //memosを更新する
    let idx = memos.indexOf(text)
    memos.splice(idx, 1)
    localStorage.memos = JSON.stringify(memos)

    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

if (localStorage.memos) {
  // ローカルストレージのmemosキーからJSONを読み込む。
  const memosJson = localStorage.memos
  // JSON.parseで配列にして、memosを更新する。
  memos = JSON.parse(memosJson)

  // ページ読み込み時に、配列の内容をブラウザに反映する。
  for (let i = 0; i < memos.length; i++) {
    const card = createCard(memos[i])

    console.log(memos[i])

    container.append(card)
  }
}

const addTodo = () => {
  //配列とローカルストレージを更新する
  memos.push(inputElement.value)

  console.log(inputElement.value)

  localStorage.memos = JSON.stringify(memos)

  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 追加ボタンを押したときの処理を登録
addButton.onclick = addTodo

// EnterKeyを押したときの処理を登録
inputElement.onkeydown = function (e) {
  if (e.key === "Enter") {
    addTodo()
  }
}
