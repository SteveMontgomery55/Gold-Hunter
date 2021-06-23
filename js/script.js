const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    //Picking two cards

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
    } else {
        flippedCard = false;
        secondCard = this;

        //Is it a match?

        if (firstCard.dataset.image === secondCard.dataset.image) {
            setTimeout(() => {
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);
                alert("Congratulations! The money is yours!");
            }, 1500);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
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