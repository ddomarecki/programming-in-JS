let size = 10;
let orderElement = 1;

const init = () => {
    //przycisk dodający 10 elementów li
    const btn = document.createElement("button");
    btn.innerHTML = "Dodaj 10 elementów listy";
    btn.style.fontSize = "22px";
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";

    document.body.appendChild(btn);
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);

    //przycisk usuwający
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Usuń elementy";

    document.body.appendChild(removeBtn);
    removeBtn.addEventListener("click", removeElements);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = "Element nr " + orderElement;
        li.style.fontSize = size + "px";
        document.querySelector("ul").appendChild(li);

        orderElement++;
        size++;
    }
}

//funkcja usuwająca/zerująca
/* 
alternatywnie można krócej zrobić:
document.querySelector("ul").textContent = "";
size = 10;
orderElement = 1;
*/
const removeElements = () => {

    var elementsToRemove = document.querySelectorAll("li")
    elementsToRemove.forEach(element => {
        element.remove();
    });
    orderElement = 1;
    size = 10;
}

init()