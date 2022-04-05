//*Operatori logici
//?Operatore OR: "Oppure", la condizione sarà vera se almeno una delle condizioni sarà vera ||

const surname = "Feola";
const isHero = true;

//condizione VERA       condizione FALSA        VERA
if (surname === "Feola" || surname === "Esposito" || isHero) {
  console.log("Qualcuno è un'eroe");
}
//almeno un valore della condizione è true quindi console log sarà visualizzato

let result = surname || isHero; //result assumerà il primo valore TRUE tra quelli indicati.
const notHero = false;
result = notHero || console.log("Non sei un'eroe"); //assume primo valore true
console.log(result);
//in questo caso notHero sarà FALSE quindi result avrà console.log

//?Operatore AND: "E", ritorna true quando tutte le condizioni saranno true &&
//          VERA        VERA
if (surname === "Feola" && isHero) {
  console.log("Sei un'eroe");
}
//entrambi sono true quindi eseguirà il codice

//nel caso dell'assegnazione, AND si comporta all'opposto di OR, la variabile assume il primo valore FALSE trovato.
result = isHero && null && surname; //null

//?Operatore NOT: "Non è", Ritorna il valore opposto, dopo conversione in booleano !

result = !isHero; //isHero (true) assegna il suo valore opposto a result
console.log(result); //false

//è possibile negare una condizione in un if: se surname è false esegui codice
if (!surname) {
  console.log("Non hai cognome");
}

//doppia negazione converte in booleano. il primo ! converte in booleano e ne da l'opposto, il secondo ! da di nuovo l'opposto
result = !!surname; //converte surname in boolean
