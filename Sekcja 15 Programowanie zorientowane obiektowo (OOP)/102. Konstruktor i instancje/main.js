const Car = function() {}

function Car(name) {
this.name = name;

} //alternatywnie tworzymy funkcję anonimową dla konstruktora

const maluch = new Car('maluch');
const polonez = new Car('polonez')

maluch.name = "zabytek";
maluch.constructor