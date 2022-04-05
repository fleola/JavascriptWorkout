//*Sintassi alternative per dichiarare una funzione

//! Function Expression
//? Assegnare una funzione ad una variabile (usare sempre const) permette di eseguirla solo dopo che questa è
//? stata dichiarata, a differenza della declaration che può essere eseguita anche prima della dichiarazione.

const getHeroPartner = function () {
  return "Robin";
}; //chiudere la dichiarazione con un ; a differenza del function

getHeroPartner(); //questa sintassi esegue la funzione ()
console.log(getHeroPartner); //questa riporta il contenuto della variabile

//! Arrow Functions
//? Altra sintassi alternativa per dichiarare una funzione, estremamente sintetica
// parola chiave const + nomeFunzione + "=" + (parametri) + "=>" + {eseguibile}
const getArrowHero = () => {
  return "Green Arrow";
};
getArrowHero(); //Green Arrow

//esempio con parametri, se passiamo un solo parametro possiamo evitare le parentesi tonde
const getColoredArrowHero = (color) => {
  return `${color} Arrow`;
};
getColoredArrowHero("Pink"); // Pink Arrow

//quando una funzione ha solo un return nell suo codice eseguibile, può essere scritta inline
//evitando le graffe e la parola chiave return
//? const getColoredArrowHero = color => `${color} Arrow` ;
