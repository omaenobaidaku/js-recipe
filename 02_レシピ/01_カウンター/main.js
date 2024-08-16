const display = document.getElementById("display")
const clearButton = document.getElementById("clear-button")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const times2Button = document.getElementById("times2-button")

let count = 0

clearButton.onclick = function () {
  count = 0
  display.textContent = count
}

plusButton.onclick = function () {
  count += 1
  display.textContent = fizzBuzz(count)
}

minusButton.onclick = function () {
  count -= 1
  display.textContent = fizzBuzz(count)
}

times2Button.onclick = function () {
  count *= 2
  display.textContent = fizzBuzz(count)
}

const fizzBuzz = function (n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return (
      "Fi" + "z".repeat(Math.abs(n / 3)) + "Bu" + "z".repeat(Math.abs(n / 5))
    )
  } else if (n % 3 === 0) {
    return "Fi" + "z".repeat(Math.abs(n / 3))
  } else if (n % 5 === 0) {
    return "Bu" + "z".repeat(Math.abs(n / 5))
  } else {
    return n
  }
}
