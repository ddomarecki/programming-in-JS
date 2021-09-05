// let number = 0;
const add = () => {
    let number = 0;
    number++;
    document.body.textContent = `aktualny stan licznika to ${number}`;
}
document.addEventListener('click', add)