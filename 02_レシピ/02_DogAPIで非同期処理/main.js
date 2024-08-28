const imageElement = document.getElementById("image")
const button = document.getElementById("reload-button")

const getDoggo = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}

getDoggo()

button.onclick = getDoggo
