let player = {
    name: "Aravind",
    chips: 100
}
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = ""
let sum = 0
let cards =[]
let hasblackjack = false
let stillingame = false
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    stillingame = true
    let card1 = randomcard()
    let card2 = randomcard()
    sum = card1 + card2
    cards = [card1, card2]
    Begin()
}
function randomcard() {
    let randomNo = Math.floor( Math.random()*13 ) + 1
    if(randomNo >10) {
        return 10
    }
    else if (randomNo ===1){
        return 11
    }
    else {
        return randomNo
    }
}
function Begin() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i< cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <21){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasblackjack = true
    } else {
        message = "You're out of the game!"
        stillingame = false
    }
    messageEl.textContent = message

}
function newCard() {
    if (stillingame === true && hasblackjack === false){
    let card = randomcard()
    cards.push(card)
    sum += card
    Begin()    
    }
}