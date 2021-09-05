// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/
//clearInterval(indexTyping)

const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs
const time = 3000;
let active = 0;
let activeX = false;
// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = (index) => {
    if (index) {
        active--;
    } else {
        active++;
    }
    if (active === slideList.length) {
        active = 0;
    } else if (active <= -1) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let changeSlideIndex = setInterval(changeSlide, time)

function keyChangeSlide(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37) {
        console.log("strzałka w lewo");
        clearInterval(changeSlideIndex);
        changeSlide(-1);
        changeSlideIndex = setInterval(changeSlide, time);
    } else if (e.keyCode == 39) {
        console.log("strzałka w prawo");
        clearInterval(changeSlideIndex);
        changeSlide();
        changeSlideIndex = setInterval(changeSlide, time);


    } else {
        console.log("inny klawisz");
    }

}

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)


// dots.forEach(dot => dot.addEventListener("click", () => dot.classList.toggle("active")))

//foreach dodaje raz jednej klase active a nastepnie wszystkim
// dots.forEach(function (dot) {
//     dot.addEventListener("click", function () {
//         console.log("klik");
//         dot.classList.add("active");
//         dots.forEach(function(dott) {
//             dott.classList.add("active");
//         })
//     })
// })