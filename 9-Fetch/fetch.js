//* FETCH
//? FETCH è un API di JS che consente di interrogare database o server remoti.
//? È abbastanza recente, si basa sulle primise quindi ha un approccio asincrono

//! Sintassi: FETCH e url API come argomento.
// essendo una promise andiamo ad usare il then, response srà la risposta della nostra chiamata api
// ha varie proprietà come OK che torna un booleano che valuta se la risposta è andata bene
// STATUS m ostra lo stato della chiamata (200 è andata a buon fine).
// Response.json ritorna il body della chiamata, then(data) riceverà il risultato della promise determinata da .json

//Questo è un esempio di chiamata API di tipo GET che permette di ottenere dati.
//Attendiamo la response nel then per poi rturnarla in json e poi mostrarla in data
fetch("https://randomuser.me/api/?result=5")
  .then((response) => {
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    return response.json();
  })
  .then((data) => console.log(data));

//? Oltre al Json è possibile tornare il body anche nei formati:
//- responde.text() -> direttamente testo
//- responde.formData() -> in caso di form
//- responde.blob() ->dati complessi come immagini etc
//- responde.arrayBuffer()

//! Promise
// è possibile gestire il fetch in maniera più semplice evitando dei passaggi, soprattutto per
// la gestione e la lavorazione di quello che ricaviamo. In questo caso facciamo il fetch,
// nel then restituiamo la response in json per poi ciclare il risultato per mostrarlo nel dettaglio.
// andiamo quindi a chiamare l'api e lavorare su ciò che abbiamo ottenuto direttamente nella funzione
function getPeoplePromise() {
  fetch("https://randomuser.me/api/?result=5")
    .then((response) => response.json())
    .then((response) => {
      const commits = response;
      commits.results.forEach((commit) => console.log(commit));
    })
    .catch(() => console.log("errore"));
}
getPeoplePromise();

//! Async: da promise ad async/await
// Qui una "traduzione" in async await dell'ultima promise
// in aggiunta prendiamo anche gli headers , le intestazioni comunicatwe dal server
async function getPeopleAsync() {
  try {
    const response = await fetch("https://randomuser.me/api/?result=5");
    console.log(response.headers.get("Content-Type"));
    const commits = await response.json();
    commits.results.forEach((commits) => console.log(commits));
  } catch (err) {
    console.log("errore async/await");
  }
}
getPeopleAsync();

//! Post
// A differenza di get post scrive i dati (?)

//il secondo parametro del fetch permette di indicare un oggetto di configurazione:
// - Metodo della chiamata POST che indica la creazione
// - Gli Headers che vogliamo indicare
// - Il body che vogliamo indicare
const user = {
  name: "Batman",
  partner: "Robin",
};
async function addPeople() {
  try {
    let response = await fetch("https://randomuser.me/api/?result=5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    let result = await response.json();
    console.log(result.message);
  } catch (e) {
    console.log(e);
  }
}
addPeople();

//! Post con FORMDATA
//? in caso di form possiamo usare FormData per inserirlo nel body
/*
<form id="formElem">
<input type="text" name="nome" value="Batman">
<input type="text" name="partner" value="Robin">
</form> 
 */
fetch("https://randomuser.me/api/?result=5", {
  method: "POST",
  headers: { "Content-Type": "application/json;charset=utf-8" },
  body: new FormData(formElem),
});

//! URL
//? il costruttore URL ci permette di identificare protocol, hot , pathname etc
const url = new URL("https://test.info/url");
console.log(url.protocol); //https:
console.log(url.host); //test.info
console.log(url.pathname); //url

//! CENNI CORS
//? "Cross Origin Resource Source"
//? nel momento in cui facciamo chiamate api e ci rapportiamo con qualcosa di esterno al nostro sito
//? entrano in gioco delle misure di sicurezza dette CORS. Si possono dividere in:
//? - SAFE: le chiamate di tipo get, post, headers sono dette safe perchè regolate a monte
//? - UNSAFE: tutte le altre chiamate e alcuni header vietati, in questo caso il browser fa una chiamata
//? ulteriore per chiedere un'autorizzazione, se la ottiene procede.
