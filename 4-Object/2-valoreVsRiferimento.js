//* PASSAGGIO PER VALORE DI RIFERIMENTO
//! Come vengono copiati gli oggetti ?

//? ASSEGNAZIONE PER VALORE

let strHero = "Batman"; //dichiaro strHero assegnandogli "Batman"
let anotherStrHero = strHero; //dichiaro anotherStrHero assegnandogli il valore della variabile strHero
strHero = "Superman"; //riassegno la variabile strHero con "Superman"
console.log(strHero); //Superman
console.log(anotherStrHero); //Batman

// Quando assegnamo una variabile ad un'altra variabile, viene semplicemente copiato il suo valore.
// Le due variabili restano distinte ed indipendenti, continueranno a vivere in autonomia, infatti
// se le riassegnamo cambieranno valore

//? ASSEGNAZIONE PER RIFERIMENTO
// Gli oggetti si comportano diversamente usando il metodo per riferimento e non per valore
// in fase di riassegnazione quindi avremo valori diversi.

// prendiamo il nostro oggetto hero
let vehicleType = "car";
let hero = {
  name: "Batman",
  weapon: "Batarang",
  "best partner": "Robin",
  [vehicleType]: "Batmobile",
  call: function () {
    return `Help Me ${this.name}`;
  },
};

let anotherHero = hero; //dichiaro anotherHero e gli assegno l'oggetto hero
anotherHero.name = "Superman"; //riassegno una proprietà del nuovo oggetto con nome diverso
console.log(anotherHero.name); //Superman, nel nuovo oggetto tutt appost
console.log(hero.name); //Superman, il vecchio ha subito le modifiche del nuovo

// nel momendo in cui copiamo un oggetto, quello che viene copiato non sono i suoi valori
// ma i riferimenti all'allocazione di memoria. Quindi, se riassegnamo una proprietà del nuovo oggetto
// questa sarà cambiata anche nel vecchio appena copiato, perchè entrambi puntano alla stessa allocazione di memoria.
// il console log di due valori uguali di due oggetti diversi sarà lo stesso.

//! QUINDI COME SI COPIA UN OGGETTO?

let cloneHero = Object.assign({}, hero); // "Copia hero in un oggetto vuoto di nome cloneHero"

// Usando il costruttore OBJECT e il metodo ASSIGN è possibile clonare un oggetto
// Tra le () specifichiamo:
// - {} oggetto vuoto, il nostro nuovo oggetto
// - nome oggetto da copiare, in questo caso HERO

cloneHero.name = "Green Arrow";
console.log(hero.name); //Superman
console.log(cloneHero.name); //Green Arrow

// riassegnando una proprietà non ci sarà conflitto perchè i due oggetti sono diversi e separati
// inoltre puntano a due allocazioni di memoria diverse

// ATTENZIONE: questo metodo non è fa un DEEP CLONE; se nella proprietà ci fossero ulteriori oggetti nidificati,
// verrebbe copiato solo il riferimento e non i valori, l'oggetto nidificato quindi resterebbe indipendente.

//! PICCOLO TIP
//{}==={} // FALSE!
//Sono due oggetti a tutti gli effetti e che quindi puntano a due allocazioni di memoria diverse
