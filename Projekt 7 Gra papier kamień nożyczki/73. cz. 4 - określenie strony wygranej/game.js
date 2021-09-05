// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: ""
}

//pobranie trzech graficzek
//operator rest ... zamienia node liste na tablice, tablica ma więcej metod

const hands = [...document.querySelectorAll(".select img")];

//Pierwsza funkcja
function handSelection() {
    console.log(this);
    //dataset odwołuje się do obiektu który gromadzi opcje "data-option"
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px red';
}

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player === ai) {
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "loss";
    }
}
//funkcja sterująca
function startGame() {
    //!game.playerHand -> gdy jest pusty string to false ale ! odwraca na true
    if (!game.playerHand) return alert("wybierz dłoń!")

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
}

//ustawiamy nasłuchiwanie na klika
hands.forEach(hand => hand.addEventListener('click', handSelection));
// hands.forEach((hand) => {
//     hand.addEventListener('click', handSelection);
// })

document.querySelector('.start').addEventListener('click', startGame)