//* OGGETTI NIDIFICATI ED OPTIONAL CHAINING
//? È possibile nidificare gli oggetti, quindi avere come proprietà di un oggetto un ulteriore oggetto

let hero = {
  name: "Batman",
  weapon: "Batarang",
  vehicle: {
    // ! INIZIO
    type: "car", // ! Oggetto
    model: "Batmobile", // ! Nidificato
  }, // ! FINE
  partner: {
    //? INIZIO
    nome: "Robin", //? OGGETTO NIDIFICATO
    vehicle: {
      //INIZIO
      type: "Motorcycle", // OGGETTO NIDIFICATO
      model: "Batcycle", //All'interno di un oggetto nidificato
    }, //FINE
  }, //? FINE
};

//! Come prendere valori specifici?
//? seguire la dot notation
console.log(hero.vehicle.model); //Batmobile
console.log(hero.vehicle.plate); //undefined, non esiste

//! WHAT IF: e se partner non esistesse?
console.log(hero.partnerone); //undefined, partnerone non esiste
console.log(hero.partnerone.nome); //ERRORE, pertnerone è undefined, non puoi chiedere le proprietà di un undefined

//! Come verificare se le proprietà di un oggetto esistono?
//In questo modo controlliamo se la nostra proprietà esiste ed evitiamo errori
if (hero.partner) {
  //..
}
//->    //! OPTIONAL CHAINING
//? se dobbiamo controllare più parametri il nostro if diventa verboso,
//? ES6 ci aiuta in tal senso con l'optional chaining

// Controlla se tutti i valori esistono e non sono undefined
if (hero.partner && hero.partner.vehicle && hero.partner.vehicle.type) {
  let type = hero.partner.vehicle.type;
}
// questo if diventa:
let type = hero?.partner?.vehicle?.type;
// usando il ? dopo il percorso della proprietà controlliamo se esiste o meno,
// se ci fosse un undefined il nostro type sarà di tipo undefined,
