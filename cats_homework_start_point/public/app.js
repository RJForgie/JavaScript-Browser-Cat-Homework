var CATS_ARRAY = [
  {name: "Name: Dr Evil", favouriteFood: "Favourite Food: Harrison", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg" }
]

var createNewCatUL = function () {
  var newCatUL = document.createElement('ul')
  newCatUL.classList.add('cat')
  return newCatUL
}

var createNameLI = function (name) {
  var nameLI = document.createElement('li')
  nameLI.textContent = name
  return nameLI
}

var createFavouriteFoodLI = function (favouriteFood) {
  var favouriteFoodLI = document.createElement('li')
  favouriteFoodLI.textContent = favouriteFood
  return favouriteFoodLI
}

var createImageAreaLI = function () {
    var imageAreaLI = document.createElement('li')
    return imageAreaLI
}
var createActualCatImage = function (image) {
  var catImage = document.createElement('img')
  catImage.src = image
  return catImage
}

var appendElements = function(cats, newCatUL, nameLI, favouriteFoodLI, imageAreaLI, catImage) {
  newCatUL.appendChild(nameLI)
  newCatUL.appendChild(favouriteFoodLI)
  newCatUL.appendChild(catImageAreaLI)
  catImageArea.appendChild(catImage)
  actualCatImage.width="500"
  cats.appendChild(newCatUL)
}


var addCat = function(name, favouriteFood, image){
  var newCatUL = createNewCatUL()
  var name = createNameLI(name)
  var favouriteFood = createFavouriteFoodLI(favouriteFood)
  var catImageArea = createCatImageAreaLI()
  var actualCatImage = createActualCatImage(url)
  var cats = document.querySelector('section#cats')
  appendElements(cats, newCatUL, name, favouriteFood, actualCatImage)
}

var app = function(){
  for (var cat of CATS_ARRAY) {
    addCat(cat.name, cat.favouriteFood, cat.image);
  }
}

window.addEventListener('DOMContentLoaded', app)
