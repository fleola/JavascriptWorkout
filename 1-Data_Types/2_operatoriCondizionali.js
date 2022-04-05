//*Operatori condizionali
let boolValue = true;

//Sintassi esplicita. If condizione è vera esegui operazioni tra le graffe
if (boolValue === true) {
  console.log("È proprio vero!");
}

//Sintassi implicita. La condizione sarà sempre di tipo boolean quindi non esplicitando il === true lo riceve di default
if (boolValue) {
  console.log("È proprio vero di nuovo!");
}

//Sintassi esplicita. Se la condizione è falsa esegui operazioni
if (boolValue != true) {
  console.log("Questa riga non andrà in concole");
}

//Sintassi implicita. Basta "Negare" usando il ! prima del nome, senza usare l'operatore !=
if (!boolValue) {
  console.log("Neanche questa andrà in console");
}

//IF / ELSE. IF condizione è vera esegui riga, ELSE esegui altra riga.
//Se strValue è  '42', assegna 'Quarantadue' a newStrValue; Altrimenti assegna 'Altro Numero'
let strValue = "42";
let newStrValue;
if (strValue === "42") {
  newStrValue = "Quarantadue";
} else {
  newStrValue = "Altro numero";
}

//Operatore ternario
//una traduzione dell'operazione appena effettuata.
newStrValue = strValue === 42 ? "Quarantadue" : "Altro numero";

//Concatenare IF ELSE
if (strValue === "42") {
  console.log("Quarantadue");
} else if (strValue === "45") {
  console.log("Quarantacinque");
} else {
  console.log("Un altro numero");
}
