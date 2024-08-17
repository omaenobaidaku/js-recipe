const figure = document.getElementById("figure")

window.onresize = function () {
  figure.classList.toggle("triangle")
}

figure.onclick = function () {
  if (figure.classList.contains("rounded") === true) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.contains("triangle") === true) {
    figure.classList.remove("triangle")
  } else {
    figure.classList.add("rounded")
  }
}
