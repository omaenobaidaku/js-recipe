const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e)
}

inputText.onkeydown = logValue
inputDate.oninput = logValue
