/*
 * Create a list that holds all of your cards
 */
var cards = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube",
            "fa-leaf", "fa-bicycle", "fa-bomb",
            "fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube",
            "fa-leaf", "fa-bicycle", "fa-bomb"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

shuffleFunction();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleFunction(evt){

    var deck = document.querySelector(".deck");
    var cardList = document.getElementsByClassName("card");
    for(i=0;i<cards.length;i++){
        cardList[i].classList.remove('open', 'show', 'match');
    }
    cards = shuffle(cards);
    
    
    for(i=0; i<cards.length; i++){

        while(cardList[i].firstChild){
            cardList[i].firstChild.remove();
        }
        
        var cardNode = document.createElement('i');
        cardNode.classList.toggle("fa");
        cardNode.classList.toggle(cards[i]);
        cardList[i].appendChild(cardNode);
        
    }
    
}





var reset = document.querySelector('.fa-repeat');
reset.addEventListener('click', shuffleFunction);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*
var listOfCards = document.getElementsByClassName('card');

var cardNames = []

for (i=0;i<listOfCards.length;i++){
    cardNames.push(listOfCards[i].firstElementChild.className.split(" ")[1]);
} 
console.log(listOfCards);
console.log(cardNames);
*/
var parentCard = document.querySelector('.deck');


function cardClicked(evt){

    if(evt.target.class != 'card')
    {
        

        if (evt.target.className == 'card'){
            
            evt.target.classList.toggle('open');
            evt.target.classList.toggle('show');
            evt.target.classList.toggle('match');
        }
    }
}


parentCard.addEventListener('click', cardClicked);

