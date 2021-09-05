const squere = document.createElement("div");
document.body.appendChild(squere);

let grow = true; //flaga

let size = 100; //wielkość kwadratu
squere.style.width = size + "px";
squere.style.height = size + "px";

window.addEventListener("scroll", function () {

    if (grow == true) {  // alternatywnie: samo grow (grow)
        size += 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }

    if (size >= window.innerWidth / 2) {
        grow = false; // grow = !grow --> alternatywnie
    } else if (size <= 0) {
        grow = true;  // grom = !grow
    }
})