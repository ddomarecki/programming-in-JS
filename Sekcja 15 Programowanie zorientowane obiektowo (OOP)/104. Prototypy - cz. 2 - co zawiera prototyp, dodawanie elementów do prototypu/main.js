/* PROTOTYP */

/* CZĘŚĆ 1 */

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function(name) {
    //     this.children.push(name);
    // }
    // marnuje sie miejsce w pamieci bo kazdy obiekt stworzony za pomocą konstruktora ma w sobie tę metodę
}
Person.prototype.addChildren = function(name) {
    this.children.push(name);
}
//teraz obiekt monika i arek nie bedzie miał metody addchildren, bedzie ją miał w swoim prototypie!

const arek = new Person('arek', 20);
const monika = new Person('monika', 30);

arek.addChildren('asia');

Person.prototype // wyświetli prototypy konstruktora, prototyp bedzie zawierał metodę addChildren

Person.prototype.gender = 'female'; //dodaje do prototypu Person właściwość gender. w obiekcie tego nie bedzie ale w prototypiepie sie znajdzie ta właściwość


/* CZĘŚĆ 2 */

// CZYM JEST PROTOTYP

// Prototyp to obiekt w funkcji konstruktora, współdzielony przez wszystkie egzemplarze. Kązdy egzemplarz ma dostęp do obiektu prototypu.

// CO ZAWIERA PROTOTYP?
// domyślnie właściwość constructor (funkcja konstruktora lub klasa) + to co zostanie przypisane do prototypu

function Player() {

}

class User {

}

Player.prototype.age = 25;
const janek = new Player();
const marta = new User();

janek.constructor
marta.constructor

const darek = new janek.constructor() //odwołujemy się do konstrutktora janka bo to ten sam bedzie konstruktor co Player - czyli funkcja Player(). Utworzy to odwołanie nam nową instancję

//DODAWANIE ELEMENTÓW DO PROTOTYPU (KONSTRUKTOR)
function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function(citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
    // }
}
Citizen.prototype.changeCitizenship = function(citizenship) {
         this.citizenship = citizenship;
         console.log(`zmiana za pomocą metody w prototypie na obywatelstwo ${this.citizenship}`)
     }

const zenek = new Citizen("Polska", "polskie");
const marysia = new Citizen("Francja", "niemieckie");

//zenek.changeCitizenship('rosyjskie');

//Obiekt prototype zawsze aktualny

console.log(zenek.age); //tu bedzie undefined
Citizen.prototype.age = 21;
console.log(zenek.age);

//przysłanianie
//ta metoda która ma tę samą nazwę ale jest bliżej obiektu jest ważniejsza  i przysłania tę metodę dalszą ktora jest w prototypie

//rozszerzanie prototypu także wbudowanych konstruktorów
const arr = [5, 6, 7, 8];
Array.prototype.delete = function(index) {
    return this.splice(index, 1)
}
