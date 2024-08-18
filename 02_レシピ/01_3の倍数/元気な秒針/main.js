let seconds = 0
const byousin = function () {
  if (seconds % 3 === 0) {
    console.log(`${seconds}!!!!!!!!`)
  } else {
    console.log(seconds)
  }

  seconds++
}

setInterval(byousin, 1000)

const clock = document.getElementById("clock")
let now, second, time

const genkiClock = function () {
  now = new Date()
  second = now.getSeconds()
  time = `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
  if (second % 3 === 0) {
    time = time + "!!!!!!!"
  }
  if (time.toString().includes("3") === true) {
    time = time + "!!!!!!!"
  }
  clock.textContent = time
}

const clockDisplay = function () {
  clock.textContent = ""
  setTimeout(genkiClock, 200)
}

setInterval(clockDisplay, 1000)
