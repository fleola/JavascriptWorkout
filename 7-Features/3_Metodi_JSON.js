//* METODI JSON
//? JSON (Java Script Object Notation)
//?è un formato testuale atto a dare una rappresentazione testuale degli oggetti.
//? JSON ormai rappresenta uno standard molto utilizzato sopratutto in termini di API etc.
// trasformando in JSON un oggetto questo diventerà una stringa contenuta tra {},
//sia le chiavi che i valori saranno contenute tra ""
// alcuni tipi di proprietò vengono ignorate durante il processo: i metodi, Symbol, undefinede
const hero = {
  name: "Batman",
  isRich: true,
  weapons: { primary: "Batarang", secondary: "Shark Repellent" },
  vehicles: ["Batpod", "Tumbler"],
  partner: null,
  sayHelp() {
    //IGNORED
    console.log("Help");
  },
  [Symbol("id")]: 123, //IGNORED
  something: undefined, //IGNORED
};
//in caso di oggetti possiamo indicare un comportamento in caso di JSON
//in questo caso dall'oggetto weapons tornerà solo la proprietà primary
hero.weapons.toJSON = function () {
  return this.primary;
};

//!STRINGIFY
//?converte in stringa un oggetto
let json = JSON.stringify(hero);
console.log(typeof json); //string
console.log(json);
//{"name":"Batman","isRich":true,"weapons":"Batarang","vehicles":["Batpod","Tumbler"],"partner":null}

//!PARSE
//?fa il processo inverso e crea un oggetto dalla stringa
const newHero = JSON.parse(json);
console.log(newHero);
/* {
    name: 'Batman',
    isRich: true,
    weapons: 'Batarang',
    vehicles: [ 'Batpod', 'Tumbler' ],
    partner: null
} */

// Possiamo sfruttare Parse e Stringify per clonare un dato oggetto
// Prima lo facciamo diventare stringa e poi lo riportiamo ad oggetto con Parse assegnando il risultato ad un nuovo oggetto
const anotherHero = JSON.parse(JSON.stringify(newHero));
console.log(anotherHero);
/* {
    name: 'Batman',
    isRich: true,
    weapons: 'Batarang',
    vehicles: [ 'Batpod', 'Tumbler' ],
    partner: null
  } */
