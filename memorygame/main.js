
let card =["queen","queen","king","king"];
let cardsInPlay=[];
let cardOne=card[0];
cardsInPlay.push(cardOne);

console.log("User flipped "+ " "+cardsInPlay);

let cardTwo=card[2];
cardsInPlay.push(cardTwo);
    if (cardsInPlay.length===2)
    {
        if(cardsInPlay[0]===cardsInPlay[1])
        {
            alert("You found a match!");
        }

        else
        {
                    alert("Sorry, try again.");
        }
        
    }