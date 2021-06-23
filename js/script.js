const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let cardOne, cardTwo;

function flipCard() {
    this.classList.add('flip');

    //Picking two cards

    if (!flippedCard) {
        flippedCard = true;
        cardOne = this;
    } else {
        flippedCard = false;
        cardTwo = this;

        //Is it a match?

        if (cardOne.dataset.image === cardTwo.dataset.image) {
            setTimeout(() => {
                cardOne.removeEventListener('click', flipCard);
                cardTwo.removeEventListener('click', flipCard);
                alert("Congratulations! The money is yours!");
            }, 1500);
        } else {
            setTimeout(() => {
                cardOne.classList.remove('flip');
                cardTwo.classList.remove('flip');
                alert("Sorry, no money for you!");
            }, 1500);
        }
    }
}

//Making the images random

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));