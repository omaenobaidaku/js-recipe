const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const answer = document.getElementById("answer")

button1.onclick = function () {
  answer.textContent = "不正解"
}

button2.onclick = function () {
  answer.textContent = "正解"
}

button3.onclick = function () {
  answer.textContent = "不正解"
}
