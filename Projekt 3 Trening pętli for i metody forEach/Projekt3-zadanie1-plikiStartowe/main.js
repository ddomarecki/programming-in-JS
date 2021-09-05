// tutaj rozwiązanie

const btn = document.querySelector("button");
let liSize = 10;
let liTable = document.querySelectorAll("li");

btn.addEventListener("click", function () {

// for (let i = 0; i < liTable.length; i++) {
//     liTable[i].style.display = "block";
//     liTable[i].style.fontSize = liSize + "px";
    
// }
// liSize++;

liTable.forEach(element => {
   element.style.display = "block"; 
   element.style.fontSize = liSize + "px";

});
liSize++;
});