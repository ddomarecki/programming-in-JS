// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let indexArr = 0;
let indexTxt = 0;
let determinant = "";
//determinant to flaga, która dostaje wartość finito po wywołaniu funkcji addLetter();


// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    setTimeout(function () {
        spnText.textContent += txt[indexArr][indexTxt];
        indexTxt++;
        const indexTyping = setInterval(function () {
            spnText.textContent += txt[indexArr][indexTxt];
            indexTxt++;
            if (indexTxt === txt[indexArr].length) clearInterval(indexTyping); 
        }, 90);

        if (indexArr >= (txt.length - 1)) {
            return determinant = "finito";
        };

        setTimeout(function () {
            spnText.textContent = "";
            indexArr++;
            indexTxt = 0;
            addLetter();

        }, 3000);

    }, 3000);
}

//final czyli końcowy setInterval, kończy się po wyrzuceniu stringa "coś tam 3" i czyści wtedy clearInterval
const final = setInterval(function() {
    if (determinant === "finito") {
        console.log("coś tam 3")
        clearInterval(final)
    }
}, 150)



addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);