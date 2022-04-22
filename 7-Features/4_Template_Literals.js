//* TEMPLATE LITERALS
//? sono formati dai due backtick ``
//Questo era il metodo per concatenare due stringhe e averne una modificata,
//in questo caso avviene anche una conversione di tipo per hero
let hero = "Batman";
let str = "Help me" + hero;
console.log(str); //Help meBatman

//Per andare a capo veniva usato \n
str = "Help me \n Batman";
console.log(str);
/* Help me 
 Batman */

//Usando il template literals la stringa verrà espressa esattamente come scritta ( a capo in questo caso)
str = `Help me
Batman!`;
console.log(str);
/* Help me
Batman! */

//usando ${} è possibile fare binding e mostrare il valore di una variabile operazioni o funzioni
str = `Help me ${hero} and he is ${40 + 3} years old!!!!!`;
console.log(str);
//Help me Batman and he is 43 years old!!!!!
