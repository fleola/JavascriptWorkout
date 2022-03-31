//* Conversione dei tipi
let boolValue = true;
console.log(typeof boolValue); //boolean, appena dichiarato

boolValue = String(boolValue); // boolValue viene converito in stringa "true"
console.log(typeof boolValue); //string

const strValue = "42";
console.log(typeof strValue); //String, nonostante abbia un valore numerico

const numValue = Number(strValue); //conversione in Number di un valore String
console.log(typeof numValue); //Number, la stringa è stata convertita in numero

//?Casi particolari
console.log("42" / "2"); //21, NUMBER! JS Convertirà in numeri le due stringhe ed eseguirà l'operazione matematica
console.log("42" * "2"); //84, number  Stessa cosa
console.log("42" - "2"); //40, number Stessa cosa
console.log("42" + "2"); //"422", STRING! L'operatore + accoderà le due stringhe senza sommarle
console.log(typeof ("42" + "2")); // type string a conferma di quanto sopra

const nanValue = Number("stringa che non è un numero"); //converti in numero una stringa contenete valori non numerici
console.log(nanValue); //NaN, not a number. La stringa non contenendo valori numerici viene convertita in valore non numerico nan

//!Eccezioni per la conversione da stringa a numero
console.log(Number("     42       ")); //42, NUMBER. JS Trimma gli spazi e converte la stringa in numero
console.log(Number("42o")); //NaN. Nel caso di stringhe che oltre ai numeri contengono anche lettere, la conversione sarà un NaN e non trimmerà
console.log(Number(true)); //1 Conversione da boolean a number, true è uguale ad 1
console.log(Number(false)); //0 False è uguale a 0

console.log(Boolean(1)); //true  Al contrario di quanto fatto prima, la conversione in boolean di 1 e 0 darà rispettivamente true e false
console.log(Boolean(0)); //false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean("")); //FALSE  stringa vuota
console.log(Boolean("0")); //TRUE  nonstante il valore 0 la stringa ha un contenuto
console.log(Boolean("ciao")); //TRUE  stringa completa con valori letterari
console.log(Boolean(" ")); //TRUE  stringa non vuota ma con carattere space
