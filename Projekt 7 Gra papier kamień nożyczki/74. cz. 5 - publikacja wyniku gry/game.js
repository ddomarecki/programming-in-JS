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
//publikacja wyniku

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;

    document.querySelector('p.numbers span').textContent = gameSummary.numbers;

    if(result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";

    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis :\\";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
}

//funkcja sterująca
function startGame() {
    //!game.playerHand -> gdy jest pusty string to false ale ! odwraca na true
    if (!game.playerHand) return alert("wybierz dłoń!")

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    //znamy już wynik, wywołujemy funkcję publishResult();
    //game.playerHand jest w zakresie globalnym ale gameResult jest tylko w tej funkcji, więc trzeba go wpisać jako zmienna normalnie
    publishResult(game.playerHand, game.aiHand, gameResult);
}

//ustawiamy nasłuchiwanie na klika
hands.forEach(hand => hand.addEventListener('click', handSelection));
// hands.forEach((hand) => {
//     hand.addEventListener('click', handSelection);
// })

document.querySelector('.start').addEventListener('click', startGame)