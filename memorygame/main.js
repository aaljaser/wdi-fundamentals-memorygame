
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
    function flipCard()
        { this.setAttribute('src',card[cardId].cardImage);
            console.log("user flipped "+card[cardId].rank);
cardsInPlay.push(card[cardId].rank);
console.log(card[cardId].cardImage);
checkForMatch();

        }
       function createBoard()
       {let i;let cardE;
           for( i=0;i<card.length;++i)
           {
            
            cardE = document.createElement('img');
            cardE.setAttribute("src","images/back.png");
            cardE.setAttribute('data-id'+i);
            cardE.addEventListener('onClick',flipCard(i)) ;
            document.getElementById("game-board").appendChild(cardE);
           }
       }
        
createBoard();