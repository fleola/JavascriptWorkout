//* METODI PER LA CONSOLE
//? oltre al console.log esistono altri tipi di metodi per la console, utili in base al contesto

const hero = {
  name: "Batman",
  weapons: "Batarang",
  vehicles: "Batmobile",
};
const anotherHero = {
  name: "Superman",
  weapons: "Forza",
  vehicles: "Fly",
};

console.time("Exec time");
//Fa partire un timer

//Console log rapresenta in console le variabili che passiamo, anche più di una
console.log(hero);
// -> { name: 'Batman', weapons: 'Batarang', vehicles: 'Batmobile' }
console.log(anotherHero);
// -> { name: 'Superman', weapons: 'Forza', vehicles: 'Fly' }
console.log(hero, anotherHero);
// -> { name: 'Batman', weapons: 'Batarang', vehicles: 'Batmobile' } { name: 'Superman', weapons: 'Forza', vehicles: 'Fly' }

console.error("ERRORE");
//Rappresenta un errore, in alcune console in rosso
// -> ERRORE

console.warn("WARNING");
// Rappresenta un avvertimento, in alcune console in giallo
// -> WARNING

console.table([hero, anotherHero]);
//rappresenta oggetti e array in tabella
/* 
┌─────────┬────────────┬────────────┬─────────────┐
│ (index) │    name    │  weapons   │  vehicles   │
├─────────┼────────────┼────────────┼─────────────┤
│    0    │  'Batman'  │ 'Batarang' │ 'Batmobile' │
│    1    │ 'Superman' │  'Forza'   │    'Fly'    │
└─────────┴────────────┴────────────┴─────────────┘ 
*/

console.timeEnd("Exec time");
//ferma il timer
//-> Exec time: 22.974ms

console.dir(hero);
//rappresenta un oggetto
// -> { name: 'Batman', weapons: 'Batarang', vehicles: 'Batmobile' }

console.trace();
//Fornisce info sullo stack
/* 
Trace
    at Object.<anonymous> (/Users/leofeola/Desktop/Develhope/Esercizi/JavascriptWorkout/7-Features/5_Metodi_console.js:46:9)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
 */
