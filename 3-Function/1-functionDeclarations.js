//* Funzioni e dichiarazioni di funzioni
//?Una funzione è una porzione di codice che possiamo riutilizzare e rieseguire

//! Dichiarazione
//parolachiave + nomefunzione + (parametri) + {eseguibile}
function getHero() {
  return "Batman";
}
//! Richiamare una funzione
getHero(); //è importante specificare sempre le parentesi tonde, che siano piene o vuote.

//? Possiamo indicare dei parametri nelle parentesi tonde. Questi serviranno per specificare quanti e quali valori
//? dovranno essere forniti in fase di richiamo della funzione per far sì che possa essere eseguita.
//? Questi sono del tutto arbitrari e non hanno valore di default se non vengono specificati.

function getHero(hero = "Comedian") {
  //ES6 permette di assegnare un valore di partenza al nostro parametro
  return "The ${hero}";
}

// quando richiamiamo la funzione, specifichiamo il parametro da passare e eseguire in funzione.
// Se il nostro parametro ha valore di default possiamo evitare di specificarlo.
getHero("Batman"); //The Batman //In questo caso passiamo la stringa 'Batman'
getHero(); //The Comedian //Non passando valori il risultato sarà il parametro di default

//! Uso delle variabili global scope ed in scope
// è possibile usare all'interno di una funzione una variabile dichiarata "all'esterno" di essa, cioè in GLOBAL SCOPE
let alterEgo = "Bruce Wayne";
function getAlterEgo() {
  return "Batman is ${alterEgo}";
}
getAlterEgo(); //Batman is Bruce Wayne

//  Quando dichiariamo una variabile all'interno di una funzione, questa esistera e potrà essere usata solo all'interno della funzione.
//  Si chiamerà variabile IN SCOPE, questa oscurerà eventuali variabili con lo stesso nome dichiarate all'esterno come GLOBALI.
//  Non è possibile usare una variabile in scope all'esterno di una funzione.
function getAlterEgo() {
  let alterEgo = "Leo Feola";
  return "Batman is ${alterEgo}";
}
getAlterEgo(); //Batman is Leo Feola
