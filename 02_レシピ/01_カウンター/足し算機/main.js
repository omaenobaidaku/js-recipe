const display = document.getElementById("display")
const inputNum1 = document.getElementById("input-num1")
const inputNum2 = document.getElementById("input-num2")
const equalButton = document.getElementById("equal-button")

let num1, num2

const equal = function () {
  display.textContent = num1 + num2
}

inputNum1.onchange = function (e) {
  num1 = e.target.valueAsNumber
}

inputNum2.onchange = function (e) {
  num2 = e.target.valueAsNumber
}

equalButton.onclick = equal
