//*Confronto tra i tipi
//?Confronti matematici tra numeri
console.log(42 > 10); //true banale operazione matematica tra numeri
console.log(42 === 10); //false
console.log(42 !== 10); //true

//?Confronti tra stringhe
//Ogni lettera di una stringa verrà convertita nella sua corrispondente posizione nel dizionario UNICODE per poi confrontare le posizioni come numeri.
//Nel caso di stringhe formate da più lettere JS confronterà una lettera per volta con lo stesso metodo.
console.log("S" > "B"); //true.
console.log("Batwoman" > "Batman"); //true
console.log("Batman!" > "Batman"); //true

//?Confronti tra tipi diversi
console.log("42" > 10); //true. in questo caso la stringa '42' viene tradotta in numero e poi confrontata.
console.log("     42" == 42); //true. gli spazi vengono trimmati
console.log("Batman" == 42); //false. la stringa diventa NaN

//?Tipi di uguaglianze
//! = ASSEGNAZIONE
//! == SHALLOW: CONFRONTA SOLO I VALORI
//! === CONFRONTO STRETTO (STRICT): CONFRONTA PRIMA IL TIPO E POI I VALORI
console.log(0 == false); //true. il valore è lo stesso
console.log(0 === false); //false. il tipo è diverso
console.log(undefined == null); //true. in conversione avranno lo stesso valore
console.log(undefined === null); //false. il tipo è diverso.
