
let card =[
    {rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png",

    },
    {rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png",

    },
    {rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png",

    },
    {rank:"king",
        suit:"diamonds",
        cardImage :"images/king-of-diamonds.png",

    }];
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
            console.log("user flipped "+card[cardId].rank);
cardsInPlay.push(card[cardId].rank);
console.log(card[cardId].cardImage);
checkForMatch();

        }
        flipCard(0);
        flipCard(2);
