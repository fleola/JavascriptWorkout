//* OGGETTI
//? Un oggetto è un tipo di dato, contiene un'insieme di proprietà (chiave=valore)
//? che possono essere intese come le caratteristiche dell'oggetto

//! SINTASSI OBJECT LITERAL
let vehicleType = "car";
let hero = {
  //assegnamo un oggetto alla variabile hero ={}
  name: "Batman", //sintassi PROPRIETA': [chiave] + [:] + [valore any] + [,]
  weapon: "Batarang", //è opportuno usare una parola singola per la chiave
  "best partner": "Robin", //nel caso di nomi composti per la chiave usare gli apici
  [vehicleType]: "Batmobile", //con le [] richiamiamo il valore di una variabile per la chiave
  call: function () {
    // può essere usata una funzione come valore
    return `Help Me ${this.name}`; //è importante separare le proprietà con una virgola
  },
};

//! COME RICHIAMARE LE PROPRIETA'
//? DOT NOTATION
//  SINTASSI nomeoggetto.chiave
//  Per richiamare una proprietà dell'oggetto è necessario usare la sintassi
console.log(hero.name); //hero.name per richiamare "Batman"
console.log(hero.call()); //quando richiamiamo una proprietà che è una funzione specificare le ()

//? ARRAY SYNTAX
//  SINTASSI nomeoggetto['chiave']
//  È possibile usare anche questa sintassi, specificando tra [] la chiave della proprietà.
//  Questa notazione diventa obbligatoria nel caso avessimo nomi composti
console.log(hero["name"]); //Batman
console.log(hero["best partner"]); //Nome composto. "Robin"

//? CHIAMARE UNA VARIABILE DINAMICA, COMPUTATA
//  Nel caso avessimo una chiave che rappresenta una variabile dinamica, è necessario specificare
//  il valore della variabile data come chiave e non il nome della chiave.
console.log(hero.car); //non vehicleType ma ciò che contiene. "Batmobile"

//! AGGIUNGERE DELLE PROPRIETA' AGLI OGGETTI
//  È possibile aggiungere delle nuove proprietà agli oggetti, usando entrambe le sintassi viste
hero.partner = "Robin";
console.log(hero.partner);

//! RIMUOVERE PROPRIETA' DAGLI OGGETTI
//  Tramite la parola chiave //?delete
//  è possibile rimuovere delle proprietà dall'oggetto, si possono usare entrambe le sintassi
delete hero["best partner"];
console.log(hero["best partner"]);

//! OPERATORE IN E CICLO FOR IN
//? OPERATORE IN
//  l'operatore IN esegue controlli all'interno dell'oggetto
if ("car" in hero) {
  //questo if controlla se "car" è presente nell'oggetto hero
  console.log("car è presente in hero");
}

//? CICLO FOR IN
//  Il ciclo for-in esegue controlli per tutte le proprietà dell'oggetto
//  In questo caso il ciclo inserisce in prop ogni volta la chiave contenuta IN hero

for (let prop in hero) {
  //dichiarare una variabile nella condizione, seguita dalla chiave IN
  console.log(prop, hero[prop]); //(chiave, valore)
}
// per ogni prop in hero attribuisci a prop la chiave della proprietà.
// capiamo il senso con hero[prop], dove prop sfruttando la sintassi con array prende il posto della chiave
