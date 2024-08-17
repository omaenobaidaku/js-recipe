const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const inputNumber = document.getElementById("input-number")
const operatorButtons = document.getElementById("operator-buttons")
const otherButtons = document.getElementById("other-buttons")

let operator, num1, num2

//入力された数値を取得
inputNumber.onchange = function (e) {
  num2 = e.target.valueAsNumber
  console.log("num2: " + num2)

  otherButtons.children[0].disabled = null
}

//オールクリア
otherButtons.children[2].onclick = function () {
  display1.textContent = 0
  display2.textContent = "　"
  inputNumber.value = null
  inputNumber.disabled = "disabled"
  otherButtons.children[0].disabled = "disabled"
  operator = null

  console.log("オールクリア")
}

//クリア（関数）
const clear = function () {
  display2.textContent = "　"
  inputNumber.value = null
  inputNumber.disabled = "disabled"
  otherButtons.children[0].disabled = "disabled"
  operator = null

  console.log("クリア")
}

//クリア（イベントハンドラ）
otherButtons.children[1].onclick = clear

//イコール（実行）
otherButtons.children[0].onclick = function () {
  num1 = Number(display1.textContent)
  console.log("num1: " + num1)

  if (operator === "plus") {
    display1.textContent = num1 + num2
  } else if (operator === "minus") {
    display1.textContent = num1 - num2
  } else if (operator === "times") {
    display1.textContent = num1 * num2
  } else if (operator === "dividedBy") {
    display1.textContent = num1 / num2
  }

  clear()
}

//以下、演算子ボタンのイベントハンドラ
operatorButtons.onclick = function (e) {
  if (e.target.tagName === "BUTTON") {
    //入力のブロックを解除
    inputNumber.disabled = null

    //押されたボタンのindexを取得
    let index = Array.prototype.indexOf.call(operatorButtons.children, e.target)
    console.log("index: " + index)

    if (index === 0) {
      operator = "plus"
      display2.textContent = "➕️"
    } else if (index === 1) {
      operator = "minus"
      display2.textContent = "➖️"
    } else if (index === 2) {
      operator = "times"
      display2.textContent = "✖"
    } else if (index === 3) {
      operator = "dividedBy"
      display2.textContent = "➗️"
    }

    console.log("operator: " + operator)
  } else {
    console.log("ボタン以外のクリック")
  }
}
