//* COSTRUTTORE OBJECT
//! Costruttore usato per creare oggetti
//? Il costruttore OBJECT ci permette di costruite una struttura generica per un oggetto.
// Usando il costruttore e passando i valori che ci serviranno creiamo una struttura per possiamo utilizzare per più oggetti
// usare sempre this.

function Hero(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.callMe = function () {
    return `Help me ${this.name}`;
  };
}

// Creiamo due nuovi oggetti usando il costruttore appena creato
// è fondamentale la chiave NEW
let hero = new Hero("Batman", "Batarang");
let anotherHero = new Hero("Superman", "Laser");

// Gli oggetti saranno diversi tra loro, verifichiamo
console.log(hero.name); //Batman
console.log(hero.weapon); //Batarang
console.log(anotherHero.name); //Superman
console.log(anotherHero.weapon); //Laser

// Possiamo sempre aggiungere proprietà ai nostri oggetti dichiarati con i costruttori, usando la stessa sintassi
hero.partner = "Robin";
console.log(hero.partner); //Robin

//! Object.keys - Object.values - Object.entries
//? Il costruttore object ha questi tre metodi che servono per restituire i valori di un oggetto
let ctrHero = {
  name: "batman",
  weapon: "batarang",
  vehicle: {
    type: "car",
    model: "batmobile",
  },
};

//! Values
console.log(Object.values(ctrHero));
//*  [ 'batman', 'batarang', { type: 'car', model: 'batmobile' } ]
// Restituisce i valori espressi per l'oggetto in un array, si limiterà al root quindi eventuali oggetti
// come in questo caso vehicle non verranno esplicitati

//! Keys
console.log(Object.keys(ctrHero));
//* [ 'name', 'weapon', 'vehicle' ]
// restituisce le chiavi delle proprietà dell'oggetto

//! Entries
console.log(Object.entries(ctrHero));
/* 
[
  [ 'name', 'batman' ],
  [ 'weapon', 'batarang' ],
  [ 'vehicle', { type: 'car', model: 'batmobile' } ]
] 
*/
// Restituisce un array contentente un array per ogni proprietà,
