// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->

let advices = [];

const addButon = document.querySelector('.add');
const resetButon = document.querySelector('.clean');
const showAdviceButton = document.querySelector('.showAdvice');
const showOptionsButton = document.querySelector('.showOptions');

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (newAdvice.length > 0) {
    advices.push(newAdvice);
    console.log(advices);
    input.value = "";
    }
}

const resetAdvices = (e) => {
    e.preventDefault();
    advices = [];
    console.log("tablica pusta " + advices);
}

const showAdvice = (e) => {
    e.preventDefault();
    const h1 = document.querySelector('h1');
    let randomAdviceIndex = Math.floor(Math.random() * advices.length);
    let randomAdvice = advices[randomAdviceIndex];

    h1.innerText = randomAdvice;
}

const showOptions = (e) => {
    e.preventDefault();
    alert(advices.join(" --- "));
}

addButon.addEventListener('click', addAdvice);
resetButon.addEventListener('click', resetAdvices);
showAdviceButton.addEventListener('click', showAdvice);
showOptionsButton.addEventListener('click', showOptions);