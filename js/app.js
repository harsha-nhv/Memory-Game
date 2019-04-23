/*
 * Create a list that holds all of your cards
 */
var cards = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube",
            "fa-leaf", "fa-bicycle", "fa-bomb",
            "fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube",
            "fa-leaf", "fa-bicycle", "fa-bomb"];
var card1, card2, score=0, successMoves=0, unsuccessMoves=0;
var scoreCard = document.querySelector('.moves');
var starList = document.getElementsByClassName("fa-star");
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

// The shuffle function is always called when the page reloads
cards = shuffle(cards);
scoreCard.innerText = score.toString();
scoreCard.nextSibling.textContent = " Moves";
var deck = document.querySelector(".deck");
var cardList = document.getElementsByClassName("card");

/* 
1.Looping through each card 
2.Removing the child of each card 
3.Creating new child of each card and assigning the class to each card
*/ 
for(let i=0;i<cards.length;i++){
    cardList[i].classList.remove('open', 'show', 'match');
}
for(let i=0; i<cards.length; i++){

    while(cardList[i].firstChild){
        cardList[i].firstChild.remove();
    }
    var cardNode = document.createElement('i');
    cardNode.classList.add("fa");
    cardNode.classList.add(cards[i]);
    cardList[i].appendChild(cardNode);  
}

var parentCard = document.querySelector('.deck');
parentCard.addEventListener('click', cardClicked);

/*
1.The function cardClicked is called when the user clicks the deck
2.The cards have to open when the user clicks only on the card.
3.The two variables card1 and card2 are used to store the card information
4.If the two cards are matched they are kept open else they are closed.
5.For every card clicked the score counter is incremented.
6.For every pair of card the succesMoves counter is incremented.
7.If the two cards are not matched the unsuccessMoves counter is incremented
8.The funciton displayRating is called for every card clicked to show the star rating.
*/
function cardClicked(evt){
    //Checks whether the user has clicked a card
    if(evt.target.className == 'card')
    {
        score += 1;
        scoreCard.innerText = score.toString();
        // Changing from moves to move for the first move
        if(score == 1){
        
            scoreCard.nextSibling.textContent = " Move";
        }
        else{
            scoreCard.nextSibling.textContent = " Moves";
        }
        // Setting the card information to the variable card1
        if (!card1){
            card1 = evt.target;
            card1.classList.add('show');
            card1.classList.add('open');
        }
        // Setting the card information to the variable card2 when there is any card opened
        else{
            card2 = evt.target;
            card2.classList.add('show');
            card2.classList.add('open');
        }
        // Checking the logic only when the two cards are opened
        if(card1&&card2)
        { 
            // Checking whether the two cards have the same symbol
            // Incrementing the successMoves counter
            if(card1.firstChild.className == card2.firstChild.className){
                successMoves += 1;
                card1.classList.remove('open');
                card1.classList.add('match');
                card2.classList.remove('open');
                card2.classList.add('match'); 
                card1 = null;
                card2 = null;   
            }
            // Incrementing the unsuccessMoves coutnter
            // Executes when the two cards are not matched
            else{
                unsuccessMoves += 1;
                setTimeout(function(){
                    card1.classList.remove('open', 'show');
                    card2.classList.remove('open', 'show');
                    card1 = null;
                    card2 = null;
                }, 200);
            }
        }    
    }
    displayRating(successMoves, unsuccessMoves);      
}

var reset = document.querySelector('.fa-repeat');
reset.addEventListener('click', shuffleFunction);

// Calls the shuffle function and re-initialises the variables
function shuffleFunction(evt){
    clearInterval(time);
    tick = 0;
    time = setInterval(Timer, 1000);
    score = 0;
    successMoves = 0;
    unsuccessMoves = 0;
    scoreCard.innerText = score.toString();
    scoreCard.nextSibling.textContent = " Moves";
    for(let i=0;i<cards.length;i++){
        cardList[i].classList.remove('open', 'show', 'match');
    }
    cards = shuffle(cards); 
    for(let i=0; i<cards.length; i++){

        while(cardList[i].firstChild){
            cardList[i].firstChild.remove();
        }
        
        var cardNode = document.createElement('i');
        cardNode.classList.add("fa");
        cardNode.classList.add(cards[i]);
        cardList[i].appendChild(cardNode);    
    }
    for(let i=0; i<starList.length; i++){
        if(starList[i].classList.contains("fa-star-o")){
            starList[i].classList.remove("fa-star-o");
        }
        if(starList[i].classList.contains('fa-star-half-o')){
            starList[i].classList.remove('fa-star-half-o');
        }
        starList[i].classList.add("fa-star");
        
    }   
}

// Shuffles the cards
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

var tick = 0;
var mm = 0;
var ss = 0;
var timeElement = document.querySelector(".time");

var time = setInterval(Timer, 1000);

// The function is used to display the timer
function Timer(){
    tick += 1;

    mm = Math.floor(tick/60);
    ss = tick%60;

    var text = `Time : ${mm}:${ss}`;
    timeElement.textContent = text;
}

// Displays the star rating for each move
function displayRating(a, b){
    let rating;
    if(a==0 && b==0){
        rating = 0;
    }
    else{
        rating = (a/(a+b))*5;
    }
    if(a !=0 || b!=0)
    {
        let it = 0;
        while(it<5){
            if(starList[it].classList.contains('fa-star-o')){
                starList[it].classList.remove('fa-star-o');
            }
            if(starList[it].classList.contains('fa-star-half-o')){
                starList[it].classList.remove('fa-star-half-o');
            }
            starList[it].classList.add('fa-star');
            it += 1;
        }

        if(rating == Math.floor(rating)){
            let start = rating;
            while(start<5){
                starList[start].classList.add('fa-star-o');
                start += 1;
            }
        }
        else{
            starList[Math.floor(rating)].classList.add('fa-star-half-o');
            let start = Math.floor(rating)+1;
            while(start<5){
                starList[start].classList.add('fa-star-o');
                start += 1;
            }
        }
    }
    // Checking the winning condition
    if(a==8){
        clearInterval(time);
        modalFunction(rating);
    }
}

// Displays a new window after winning the quiz for greetings
function modalFunction(rating){
    var rScore;
    if (Math.floor(rating) === rating){
        rScore = rating;
    }
    else{
        rScore = Math.floor(rating) + 0.5;
    }
    var modal = document.querySelector(".modal");
    var span = document.getElementsByClassName("close")[0];
    var text = document.querySelector(".modal-text");

    text.textContent = `Congratuations!!!!!! You won in ${mm} minutes ${ss} secs in ${score} moves with ${rScore} rating`;
    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}
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