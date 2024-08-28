const quizContainer = document.getElementById("quiz-container")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")
const quiz = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    correctIndex: 3 - 1,
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
      {
        text: "カメノテ",
        feedback: "残念！キモいけど美味いよ！",
      },
      {
        text: "ザンネン",
        feedback: "残念！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    correctIndex: 2 - 1,
    choices: [
      {
        text: "１",
        feedback: "不正解",
      },
      {
        text: "２",
        feedback: "正解",
      },
      {
        text: "３",
        feedback: "不正解",
      },
    ],
  },
  {
    text: "じゃあ、これ何匁（もんめ）？",
    image: "goen.png",
    correctIndex: 1 - 1,
    choices: [
      {
        text: "１",
        feedback: "正解",
      },
      {
        text: "２",
        feedback: "不正解",
      },
      {
        text: "３",
        feedback: "不正解",
      },
    ],
  },
  {
    text: "何城？",
    image: "maruoka.png",
    correctIndex: 3 - 1,
    choices: [
      {
        text: "熊本城",
        feedback: "不正解",
      },
      {
        text: "上場",
        feedback: "不正解",
      },
      {
        text: "丸岡城",
        feedback: "正解",
      },
      {
        text: "丸亀製麺",
        feedback: "不正解",
      },
    ],
  },
]

let quizCards = []
let quizCount = 1
let point = 0

//クイズカードを作成する
const howManyQuiz = quiz.length
for (let i = 0; i < howManyQuiz; i++) {
  const card = document.createElement("div")

  //問題文
  const quizText = document.createElement("h2")
  quizText.textContent = `Q${i + 1}. ${quiz[i].text}`

  //画像
  const quizImage = document.createElement("img")
  quizImage.src = "images/" + quiz[i].image
  quizImage.classList.add("quiz-image")

  //選択肢
  const choicesContainer = document.createElement("div")
  const howManyChoices = quiz[i].choices.length
  for (let x = 0; x < howManyChoices; x++) {
    //選択肢ボタンを作成
    const choiceButton = document.createElement("button")
    choiceButton.textContent = quiz[i].choices[x].text

    //正解の場合は点数加算、それ以外は何もなしでイベントハンドラを設定
    choiceButton.onclick = () => {
      if (x === quiz[i].correctIndex) {
        point += 1
      }
      feedback.textContent = quiz[i].choices[x].feedback
      nextQuiz.classList.remove("hidden")
      for (let y = 0; y < howManyChoices; y++) {
        choicesContainer.children[y].disabled = "disabled"
      }

      console.log(point + "点")
    }

    choicesContainer.append(choiceButton)
  }

  //cardに各要素を格納
  card.append(quizText)
  card.append(quizImage)
  card.append(choicesContainer)

  quizCards.push(card)
}

//１問目を表示
quizContainer.append(quizCards[0])

//nextQuizの挙動
nextQuiz.onclick = () => {
  if (quizCount === howManyQuiz) {
    quizContainer.textContent = ""
    feedback.textContent = `あなたは${point}問正解しました`
  } else {
    quizContainer.textContent = ""
    quizContainer.append(quizCards[quizCount])
    quizCount += 1
    feedback.textContent = ""
  }
  nextQuiz.classList.add("hidden")
}
