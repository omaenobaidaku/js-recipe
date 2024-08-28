const imageElement1 = document.getElementById("image1")
const imageElement2 = document.getElementById("image2")

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement1.src = data[0].url // 画像を表示する
    console.log(data[0].url)
  })

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement2.src = data.drinks[0].strDrinkThumb // 画像を表示する
    console.log(data.drinks[0].strDrinkThumb)
  })
