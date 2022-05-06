//* ES MODULES
/* 
? Rendere il codice modulabile è una delle priorità della nostra codebase, sia per leggibilità che per
? consistenza. È consigliabile scrivere codice quanto pià atomico e agnostico possibile, in modo da evitare
? errori, avere consistenza e poterlo riutilizzare. Nel corso del tempo ci sono stati vari pattern da poter 
? utilizzare,ES 6 ha introdotto gli ES Modules che sono lo standard attuale. I module pattern, seppur non più
? utili,  hanno introdotto il concetto di modulo: una porzioe di codice a sè stante, magari anche isolato
? in un altro file, in grado di funzionare da solo e al contempo di comunicare con gli altri moduli
? in altri file. Si lavora quindi su due file diversi, uno esporterà e l'altro importerà
 */

//tramite la chiave import possiamo importare da un altro modulo, che a sua volta avrà esportato
// defaultElement è il nome che abbiamo scelto per il parametro di default, è arbitrario
// gli altri, nelle {} sono quello che vogliamo importare
// possiamo indicare un alias con as
// from precede la libreria da cui importare
import defaultElement, { square, diag as diagonal } from "./lib1";

// è possibile anche importare l'intera libreria così
//! import * as lib from './lib1'

console.log(square(11));
console.log(diagonal(4, 3));
console.log(defaultElement);

// è possibile importare una funzione in modo asincrono, solo se ci serve o quando ci serve
// usando la sintassi async await in questo modo possiamo usare import come funzione passando come argomento la libreria
// in questo caso eseguiremo l'import solo nel momento in cui la condizione dell'if sarà verificata
async function dynamicImport() {
  const { hello } = await import("./lib2");
  console.log(hello);
}
let isHero = false;
if (isHero) {
  dynamicImport();
}
