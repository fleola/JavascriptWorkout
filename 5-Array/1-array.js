//* ARRAY
//? Un array è una lista ordinata di elementi, viene indicato con le []
//! Sintassi
let heroes = ["Batman", "Superman", "Green Arrow"];

//! Sintassi alternative
// è possibile dichiarare un'array usando la chiave NEW e ARRAY()
let otherHeroes = new Array("Batman", "Superman", "Green Arrow");

// Un array può contenere qualsiasi tipo di dato
//stringa        //oggetto               //array
let typeOfHero = new Array("Batman", { name: "Superman" }, [
  "Green Arrow",
  "Wonder Woman",
]);

//! Metodi
//? POP
//  il metodo pop rimuove l'ultimo elemento dell'array,
//  in questo caso lo assegna a lastHero mentre heroes non avrà più l'ultimo elemento
let lastHero = heroes.pop();
console.log(lastHero); //Green Arrow
console.log(heroes); //[ 'Batman', 'Superman' ]

//? PUSH
//  il metoodo push aggiunge in coda uno o più elementi
heroes.push("Green Arrow");
console.log(heroes); //[ 'Batman', 'Superman', 'Green Arrow' ]

//? SHIFT
// shift rimuove il primo elemento dell'array,
// in questo caso lo assegna a  firstHero
let firstHero = heroes.shift();
console.log(firstHero); //Batman
console.log(heroes); //[ 'Superman', 'Green Arrow' ]

//? UNSHIFT
// unshift assegna al primo posto dell'array
heroes.unshift("Batman");
console.log(heroes); // [ 'Batman', 'Superman', 'Green Arrow' ]

//? OTTENERE UN ELEMENTO IN PARTICOLARE ->[]
// con questo metodo possiamo ottenere un elemento preciso dell'array
// specificando nelle [] il numero di indice dell'elemento
// gli indici di un array partono da 0 con il primo elemento
console.log(heroes[0]); //Batman
console.log(heroes[1]); //Superman
console.log(heroes[2]); //Green Arrow
console.log(heroes[3]); //undefined

//? INTERO ARRAY -> .LENGTH
// ottiene la lunghezza dell'array
console.log(heroes.length); //3
heroes.length = 0; //svuotare l'array assegnando un nuovo numero di elementi
console.log(heroes); //[] l'array sarà vuoto

//! ITERARE OPERAZIONI
//? CICLO FOR CON I
//i indica l'indice dell'array, viene dichiarato e assegnato a 0 come posizione di partenza per il ciclo
// parte da 0 e finisce alla lunghezza massima dell'array (.length),
//  cicla tutti gli elementi e restituisce ogni elemento ciclato

for (let i = 0; i < otherHeroes.length; i++) {
  console.log(otherHeroes[i]); //Batman Superman Green Arrow
}

//? CICLO FOR OF
// un ciclo for of traduce in poche righe il ciclo con l'indice i
// si può tradurre in "per ogni elemento di, FOR pippo OF topolino"
// sfruttando l'indice hero ogni volta restituirà un elemento dell array
for (let hero of otherHeroes) {
  console.log(hero); //Batman Superman Green Arrow
}
