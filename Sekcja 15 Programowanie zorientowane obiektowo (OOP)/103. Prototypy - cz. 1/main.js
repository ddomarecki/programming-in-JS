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