// This - intro

//'use strict'
//THIS

this //obiekt globalny

const fn = function () {
    //console.log(this.example);
    //this.ad = 5;
    console.log(this.name);
}

//fn();

const obj = {
    name: "Adam",
    fn: fn,
    showName: fn
}
const fun = fn;
//fun()
//fn()

//obj.fn();
//obj.showName(); //Adam

const outside = obj.showName
outside(); // będzie tu błąd przy 'use strict'

document.addEventListener('click', function() {
    console.log(this); // #document w konsoli po kliku bedzie
    const inside = function() {
        console.log(this); //tu this odwoła się do window
    }
    inside();
})

// Co to jest this?
// Dlaczego this jest potrzebne?

//kod w zeszycie, a plik końcowy jest w dalszej części (następnej)




// Kiedy wiązanie this powstaje?
// Jak powstaje wiązanie this (zasady)
//