//* COOKIES
/*
? Nell'ambito della comunicazione tra client e server è possibile conservare 
?una parte di dati nel browser per far sì che siano conservati in memoria locale e non chiamati ogni volta
?Questi si chiamano COOKIES e ormai fanno parte della nostra quotidianità. 
?È possibile specificare che alcuni dati debbano essere salvati dal browser passando nell'header
?della chiamata API un setCookie. 
?Esempio di cookie: sito che ricorda la password e ci consente di non ripetere il login ogni volta 
*/
//Document.cookie contiene tutti i cookie
console.log(document.cookie);
// sono formati da chiave=valore, ogni volta ne aggiungiamo altri senza sovrascrivere lo stesso
document.cookie = "hero=Batman";
document.cookie = "partner=Robin";
console.log(document.cookie);
//in questo modo invece sovrascriviamo l'esistente
document.cookie = "hero=Superman";
console.log(document.cookie);
// è possibile aggiungere altre caratteristiche al cookie
document.cookie = 'hero=Batman; path=/; expires=Tue, 19 Jan 2022 04:24:04 GMT"';
console.log(document.cookie);

//! LOCAL STORAGE E SESSION STORAGE
/*
! LOCAL STORAGE
? è una memoria solo client, usata sul nostro pc e più grande dei cookie usata per memorizzare dati
? dal browser. Questi saranno disponibili in ogni scheda e finestra, anche se riavviamo il browser
! SESSION STORAGE
? invece i dati sono disponibili in quella sola scheda finchè non viene chiusa, a quel punto si perdono
*/
//rimuove tutti gli elementi
localStorage.clear();
// memorizza la coppia chiave valore
localStorage.setItem("hero", "Batman");
// lettura del valore della chiave
localStorage.getItem(key);
// rimuove la key e il relativo valore
localStorage.removeItem(key);
// lettura della key all'indice index
localStorage.key(index);
//numero degli oggetti archiviati
localStorage.length();

console.log(localStorage.getItem("hero"));

console.log(Object.entries(localStorage));

Object.keys(localStorage).forEach((key) =>
  console.log(`${key}: ${localStorage.getItem(key)}`)
);
