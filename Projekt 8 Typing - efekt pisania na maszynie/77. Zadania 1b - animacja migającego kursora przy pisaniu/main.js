const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quasi veniam accusamus blanditiis id illum excepturi porro voluptates praesentium placeat sequi officia maiores unde temporibus quisquam similique tempore, minus nihil.';

//parametry
let indexText = 0;
const time = 40;

//implementacja
const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);