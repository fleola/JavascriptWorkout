//* METODI UTILI DEGLI ARRAY
// dato l'array
let heroes = ["Batman", "Superman", "Green Arrow"];

//! CHIAVE DELETE
//? cancella il contenuto dell'array nella posizione dell'indice indicato,
// ma non l'elemento che sarà sempre presente ma vuoto e undefined
// così come la lunghezza dell'array sarà invariata
delete heroes[2];
console.log(heroes); // [ 'Batman', 'Superman', <1 empty item> ]
console.log(heroes.length); //3

//! SPLICE
//? elimina gli elementi e non solo
heroes.splice(2, 1); // (posizione di partenza, elementi da eliminare)
console.log(heroes); // [ 'Batman', 'Superman' ]
let spl = heroes.splice(1, 1, "Cyborg");
// i primi due parametri si comportano ugualmente, il terzo parametro aggiunge all'array
// in questo caso "da indice 1, rimuovi un elemento e aggiungi 'Cyborg"
// l'elemento rimosso sarà assegnato a spl
console.log(heroes); // [ 'Batman', 'Cyborg' ]
console.log(spl); // [ 'Superman' ]
heroes.splice(3, 0, "Cyborg");
// questa sintassi aggiunge senza rimuovere elementi
// da indice 3 rimuovi 0 elementi e aggiungi 'Cyborg'
console.log(heroes); // [ 'Batman', 'Cyborg', 'Cyborg' ]

//! SLICE
//? estrae elementi da un array senza modificarlo
heroes = ["Batman", "Superman", "Green Arrow"];
let sli = heroes.slice(1, 4); // (posizione di partenza, quanti elementi estrarre)
// il risultato sarà assegnato a sli senza intaccare heroes
console.log(sli); // [ 'Superman', 'Green Arrow' ]
console.log(heroes); // [ 'Batman', 'Superman', 'Green Arrow' ]

//! CONCATE
//? concatena gli elementi all'array esistente per creare uno nuovo complessivo
let con = heroes.concat("Wonder Woman", "Martian");
// con avrà il contenuto di heroes più i valori aggiunti tra () a seguire, heroes non verrà modificato
console.log(heroes); // [ 'Batman', 'Superman', 'Green Arrow' ]
console.log(con); // [ 'Batman', 'Superman', 'Green Arrow', 'Wonder Woman', 'Martian' ]

//! FOR EACH
//? cicla l'array, a differenza del for questo è un metodo dell'array
heroes.forEach((item, index, array) => {
  console.log(item, index, array);
});
// in consolelog possiamo indicare cosa visualizzare,
// in questo caso restituirà item, indice e array stesso
/*
    Batman 0 [ 'Batman', 'Superman', 'Green Arrow' ]
    Superman 1 [ 'Batman', 'Superman', 'Green Arrow' ]
    Green Arrow 2 [ 'Batman', 'Superman', 'Green Arrow' ] 
*/

//! INDEXOF, LASTINDEXOF, INCLUDES
//? servono per ricercare nell'array
//! indexOf
//? restituisce l'indice
//cerchiamo l'indice dell'elemento 2
console.log(heroes.indexOf(2)); //-1, numero 2 non trovato quindi indice -1, non esiste (min 0)
//cerchiamo l'indice dell'elemento 'Batman'
console.log(heroes.indexOf("Batman")); // 0, posizione corretta
//! lastIndexOf
//? effettua la ricerca dalla coda
console.log(heroes.lastIndexOf("Wonder Woman")); //-1, non esiste
console.log(heroes.lastIndexOf("Green Arrow")); //2
//! includes
//?ricerca il valore e restituisce un boolean true o false se lo trova
console.log(heroes.includes("Wonder Woman")); // false
console.log(heroes.includes("Batman")); //true

//! FIND, FINDINDEX
//? effettuano una ricerca
// usando il metodo find scriviamo un arrow function passando item come parametro,
// ritorna item se il nome è 'Batman' e lo assegna ad item
let item = heroes.find((item) => item == "Batman");
console.log(item); // Batman

//! FILTER
//? filtra e in base alle condizioni restituisce un array
// crea un array e lo assegna a newItems con tutti gli elementi che rispettano la condizione,
// ovvero tutti gli elementi ciclati che sono 'Batman' o 'Superman'
let newItems = heroes.filter((item) => item == "Batman" || item == "Superman");
console.log(newItems); // [ 'Batman', 'Superman' ]

//! MAP
//? scorre tutti gli elementi dell'array e li mappa, esegue operazioni su ognuno
//heroes.map ritorna un nuovo array che cicla tutti gli elementi dell'array di origine e esegue le operazioni
let arr2searchMapped = heroes.map((item) => {
  item += "Sr.";
  return item;
});
console.log(arr2searchMapped); //[ 'BatmanSr.', 'SupermanSr.', 'Green ArrowSr.' ]

//! SORT/ REVERSE
//? ordina gli arrai agendo sugli stessi, non creando copie
heroes.sort(); // ordina gli array in ordine crescente
console.log(heroes); // [ 'Batman', 'Green Arrow', 'Superman' ]
heroes.reverse(); // ordina gli arrai in ordine decrescente
console.log(heroes); // [ 'Superman', 'Green Arrow', 'Batman' ]

//! SPLIT / JOIN
//? unisce o divide stringhe ed array
let str2split = "Batman Superman Cyborg";
let splittedArr = str2split.split(" ");
// con split dividiamo una stringa in un array formato da tante stringhe quanti gli elementi
// passando come parametro il carattere che distingue gli elementi, in questo caso lo spazio
console.log(splittedArr); // [ 'Batman', 'Superman', 'Cyborg' ] array creato dalla stringa
console.log(splittedArr.join(",")); //Batman,Superman,Cyborg
// join fa il processo inverso, concatena le stringhe che formano l'array in una sola stringa
// usando il parametro che passiamo nelle () per dividere gli elementi
// tutti gli elementi saranno portati a stirnga e poi concatenati con (",")

//! REDUCE
//? scorre tutti gli elementi ed applica una riduzione ad ognuno fino a ritornare un solo valore
// questo ciclo fa la somma di tutte le cifre dell'array.
// nel dettaglio sum sarà l'accumulatore dove ad ogni ciclo sarà conservata la somma attuale
// current il valore corrente del ciclo
// 0 sarà il valore iniziale
// sum e current sono parametri di default del metodo
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); //15
