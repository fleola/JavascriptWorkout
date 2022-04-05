//*Scope
//? Lo scope è l'ambito in cui una variabile ha vita, può essere utilizzata. Il campo di vita e luogo d'azione.
//!Concetto di scope
//  Nel caso di let e const lo scope è relativo al BLOCCO dove sono dichiarate.
//  Un blocco è il contenuto tra due parentesi graffe.
//  Non è possibile dichiarare due volte una variabile all'interno dello stesso scope.
let hero = "Batman"; //Variabile GLOBALE: GLOBAL SCOPE
if (true) {
  let hero = "Superman"; //Variabile in scope
  console.log(hero); //Superman
  hero = "Green Arrow"; //Riassegnazione
  console.log(hero); //Green Arrow
  if (true) {
    let bestHero = "Leo";
    console.log(bestHero); //Leo
  }
  console.log(bestHero); //ERRORE, non è possibile chiamare una variabile fuori dal blocco e dallo scope
}
let hero = "Cyborg"; //ERRORE, non è possibile dichiarare due volte una variabile nello stesso scope

//Attenzione a ri-dichiarare sempre una variabile al cambiare dello scope.
//In questo esempio la variabile villain viene solo riassegnata senza essere ri-dichiarata,
// portando con se tra gli scope le modifiche ai suoi valori
let villain = "Joker";
if (true) {
  console.log(villain); //Joker
  villain = "Two Faces"; //Riassegnazione e non ridichiarazione, stiamo usando sempre un global scope
  console.log(villain); // Two Faces
}
console.log(villain); //Two Faces

//Le variabili VAR invece conservavano i valori avendo scope a livello funzione e non blocco
//Portando con sè i valori e le riassegnazioni, indifferentemente dal blocco in cui avvengono
var bestHero = "Batman";
if (true) {
  var bestHero = "Superman";
}
console.log(bestHero); //Superman

//!Lexical Scope
//? È possibile nidificare le funzioni facendo nesting, creando così nuovi scope.
// In questo caso la variabile HERO viene ereditata dalla funzione "sayInnerHelp"
// perchè fanno parte dello stesso blocco e quindi ne condividono lo scope.
// Le funzioni figlie (INNER) ereditano le variabili delle funzioni genitori
function simpleSayHelp() {
  let hero = "Batman";
  function sayInnerHelp() {
    return `Help me ${hero}`;
  }
  console.log(sayInnerHelp()); //Help me Batman
}

// È possibile passare i valori come parametri delle funzioni,
// questa funzione è uguale alla precedente ma sfrutta questo principio
function sayHelp(help, hero) {
  function sayInnerHelp() {
    return `${help}${hero}`;
  }
  console.log(sayInnerHelp());
}
sayHelp("Help me", "Batman"); //Quando chiamiamo la funzione passiamo i valori desiderati

//! Closure
//? una closure può essere identificata come funzione interna,
//? essa permette alla funzione esterna di conservare il suo stato e i suoi valori
// la funzione esterna ritorna il risultato della closure.
// sayHelpMe viene dichiarata ed avrà come valore la funzione esterna col valore del parametro "help"
// quando eseguiamo sayHelpMe è come se eseguissimo la closure e passiamo il valore di "hero"
// Questa operazione fa si che la funzione genitore conservi i valori e lo scope per usarli nella closure
function sayHelpByClosure(help) {
  return function (hero) {
    //closure
    return `${help} ${hero}`; //closure
  };
}
let sayHelpMe = sayHelpByClosure("Help me"); // sayHelpMe avrà come valore la funzione esterna e passiamo il parametro "help"
console.log(sayHelpMe("Batman")); // eseguendo sayHelpMe è come se eseguissimo la closure e passiamo il valore di "hero"
