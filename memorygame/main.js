
let card =["queen","queen","king","king"];
let cardsInPlay=[];
let cardOne=card[0];
cardsInPlay.push(cardOne);


    function checkForMatch()
        {
            if (cardsInPlay[0] === cardsInPlay[1])
             {
                console.log("You found a match!");
              } else
                 {
                console.log("Sorry, try again.");
                 }

         }
    function flipCard(cardId)
        {
            console.log("user flipped "+card[cardId]);
cardsInPlay.push(card[cardId]);
checkForMatch();

        }
        flipCard(0);
        flipCard(2);
