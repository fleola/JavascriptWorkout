//*UN MONDO ASINCRONO
//! ASINCRONIA: CALLBACKS
//? possiamo sfruttare il concetto di asincronia per far eseguire funzioni, passate come callback, in ritardo
// Metodo canonico per svolgere la funzione in sincrono
let hero = "";
let setHero = function (nome) {
  hero = nome;
};
setHero("Batman");
console.log("Sync", `Hi ${hero}`);

// se inseriamo il setTimeout all'interno di una funzione, il nostro risultato non cambierà
// perchè non verrà eseguito "in tempo" il timeout ma direttamente il console.log
//? ()=>{} è una funzione
let setHeroAsync = function (nome) {
  setTimeout(() => {
    hero = nome;
  }, 3000);
};
setHeroAsync("Superman");
console.log("Fake Async", `Hi ${hero}`); //Batman

// per ottenere il risultato asincrono dobbiamo sfruttare le callbacks. Passiamo la funzione con parametro
// e indichiamo l'esecuzione. Lo script, dopo il tempo indicato, verrà eseguito.
// In questo caso assegna la variabile e poi esegue la callback, tutto nel timeout quindi dopo 3000ms
let setHeroAsyncCallback = function (nome, callback) {
  setTimeout(() => {
    hero = nome;
    callback();
  }, 3000);
};
//parametro nome          //funzione callback
setHeroAsyncCallback("Green Arrow", () =>
  console.log("Async Callback", `Hi ${hero}`)
);

//Questo verrebbe eseguito prima del nostro Async, nonostante sia scritto dopo
console.log("Lorem Ipsum");
