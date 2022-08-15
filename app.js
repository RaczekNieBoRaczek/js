const cardArray = [{
  name: 'fries',
  img: 'images/fries.png'

},
{
  name: 'cheeseburger',
  img: 'images/cheeseburger.png'

},
{
  name: 'pizza',
  img: 'images/pizza.png'

},
{
  name: 'hotdog',
  img: 'images/hotdog.png'

}, {
  name: 'ice-cream',
  img: 'images/ice-cream.png'

}, {
  name: 'milkshake',
  img: 'images/milkshake.png'

},
{
  name: 'fries',
  img: 'images/fries.png'

},
{
  name: 'cheeseburger',
  img: 'images/cheeseburger.png'

}, {
  name: 'pizza',
  img: 'images/pizza.png'

},
{
  name: 'hotdog',
  img: 'images/hotdog.png'

},
{
  name: 'ice-cream',
  img: 'images/ice-cream.png'

},
{
  name: 'milkshake',
  img: 'images/milkshake.png'

}]

cardArray.sort(() => 0.5 - Math.random())



const grid = document.querySelector('#grid')
const result = document.querySelector('#result')

let cardChosen = []
let cardChosenIds = []
const cardWon = []

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.append(card)
  }
}
createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneID = cardChosenIds[0]
  const optionTwoID = cardChosenIds[1]

  if(optionOneID == optionTwoID){
    alert("wrong bitch")
  }

  if(cardChosen[0] == cardChosen[1]){

    cards[optionOneID].setAttribute('src', 'images/white.png')
    cards[optionTwoID].setAttribute('src', 'images/white.png')
    cards[optionOneID].removeEventListener('click', flipCard)
    cards[optionTwoID].removeEventListener('click', flipCard)
    cardWon.push(cardChosen)
  }
  else{
    cards[optionTwoID].setAttribute('src', 'images/blank.png')
    cards[optionOneID].setAttribute('src', 'images/blank.png')

  }

  result.textContent = cardWon.length
  cardChosen =[]
  cardChosenIds = []

  if(cardWon.length === cardArray.length/2){
    result.textContent =' you won the game bitch'
  }

}

function flipCard(){
  const cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardChosen.length ===  2){
    setTimeout(checkMatch, 500)
  }
}
