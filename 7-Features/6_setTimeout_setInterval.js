//* SET TIMEOUT AND SET INTERVAL
//? setTimeout e setInterval permettono di eseguire delle operazioni con un ritardo o ripetute nel tempo
//? senza intaccare il flow del resto del programma, questo genera delle operazioni che viaggiano
//? in asincrono rispetto al resto delle operazioni

function sayHelp() {
  console.log("Help me Batman");
}
// setTimeout ritarda l'esecuzione di un'operazione, in questo caso della funzione sayHelp di 2000ms
setTimeout(sayHelp, 2000); // la funzione va espressa senza ()

//Primo output in ordine di tempo
console.log("Batman is the best");

function sayHelpWithName(hero) {
  console.log(`Help me ${hero}`);
}

//è possibile passare anche i parametri della funzione che eseguiamo in ritardo
// in questo caso dopo 1000 ms esegui sayHelpWithName e passa "Superman" come parametro
setTimeout(sayHelpWithName, 1000, "Superman");

// setInterval ripete l'esecuzione della funzione con cadenza relativa al tempo che indichiamo, a loop
// In questo caso setInterval esegue la funzione ogni 3000ms a loop
let intervalId = setInterval(sayHelpWithName, 3000, "Wonder Woman");

// clearTimeout interrompe setInterval
// in questo caso seTimeout dopo 7000ms esegue il clear e ferma il loop
// Interval e Clear condividono l'id utile per legarli
setTimeout(() => clearTimeout(intervalId), 7000);
