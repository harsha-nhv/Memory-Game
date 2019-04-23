# Memory Game

## Project Description
The project is built using the files index.html, app.css, app.js

### index.html
1) The display structure of the game is designed in the index.html.
2) All the cards are created using the <li> tag.
3) The <i> tag is used to set the icons on the cards and the stars for displaying the rating.
4) The modal is hidden until the user completes the puzzle

### app.css
1) The styling of the elements are defined in app.css
2) In order to distinguish the open card, close card and matched cards there are classes .open, .show and .match respectively that are taken care in app.css file.

### app.js
1) The game logic is handled in app.js file
2) Initially the array cards is created with name of icons that are used in the game
3) An Event Listener is added to the deck instead to each card
4) There is also an event listener added to the restart button
5) Whenever the user clicks on the card, the information of the card is captured in using the card1 and card2 alternatively.
6) Also, the moves counter is also incremented by 1 for every closed card.
7) If the two cards are matched the variable successMoves counter is incremented and unsuccessMoves is incremented if they are not matched.
8) The rating of the game is designed in the function displayRating that makes use of successMoves and unsuccessMoves.
9) The shufflefunction is called when the user hits the reset button, all the variables are re-inistialised.
10) The timer starts ticking when the page gets loaded and it is started from zero when the user hits the reset button.
11) The winning condition is when the successMoves reaches to the value 8.
12) After the winning condition is achieved a separated window is displayed with the greetings message. 
