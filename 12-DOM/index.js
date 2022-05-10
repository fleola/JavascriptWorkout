//* DOM
/*
! "Document Object Model"
? il DOM è la rappresentazione ad oggetto della nostra pagina web. Questa rappresentazione viene fatta
? dal browser per il documento HTML e restituisce la struttura ad albero classica del foglio HTML.
? La rappresentazione ad oggetti permette d interagire dinamicamente ocn la pagina e i suoi nodi
*/

/*
! Com'è fatto?
? in quanto struttura nidificata, al passaggio a dom ha bisogno di manetnere i suoi punti cardine
? ovvero una radice e da quella , le sue ramificazioni. Questi punti si chiamano //! NODI
? e ne  esistono 12 tipi, ne vedremo i 4 principali:
? -1- document: è ciò che contiene tutto il dom, la nostra radice 
? -2- element: parliamo dei singoli tag html che rappresentano ognuno un nodo 
? -3- testo: i nodi che contengono testo (compresi spazi e a capo) vengono identificati in nodi specifici 
? perchè contengono solo testo e non una struttura complessa 
? -4- commenti: i commenti seppur non influenzano fanno comunque parte del dom e nel rappresentarlo avranno i loro nodi 
*/

//! Traversing del DOM
const htmlEl = document.documentElement;
// tramite questo metodo selezioniamo il nodo document, quindi tutto il documento (tag <html>...</html>)
const bodyEl = document.body;
// selezioniamo il contenuto del body (<body>...</body>)
const headEl = document.head;
// contenuto dell'head (<head>...</head>)

console.log(htmlEl); //<html>...</html>
console.log(bodyEl); //<body>...</body>
console.log(headEl); //<head>...</head>

console.log(document.body.childNodes.length);
// childNodes restituisce tutti i nodi figli, qualsiasi tipo essi siano.
// In questo caso conta anche testo e commento
console.log(document.body.children);
// children invece fa riferimento solo ai nodi di tipo elemento, rendendo più facile il traversing (solo elementi)

console.log("firstChild", document.body.firstChild);
// prende il primo figlio del body
console.log("lastChild", document.body.lastChild);
// prende l'ultimo figlio del body

console.log("nextSibling", document.head.nextSibling);
console.log("previousSibling", document.head.previousSibling);
// vede i fratelli, l'oggetto subito prima o subito dopo,
// nel caso del <p></p> il previous sarà il commento e il next sarà il testo
console.log("parentNode", document.head.parentNode);
// è possibile anche trovare il padre e non solo il figlio o fratello di un elemento
//! per agire sugli elementi e non su tutti i nodi basta aggiungere Element ai metodi
console.log("nextElementSibling", document.body.nextElementSibling);
console.log("previousElementSibling", document.body.previousElementSibling);
console.log("parentElement", document.head.parentElement);

//! Cercare elementi nel DOM
let pElId = document.getElementById("p-elem");
// ricerca nel DOM l'elemento con quell'ID
console.log("pElId", pElId);
const pEl = document.querySelectorAll("p");
// passando un selettore CSS riceveremo una collezione di oggetti corrispondenti a quel selettore dal DOM
console.log("pEl", pEl);
pElId = document.querySelector("#p-elem");
// restituisce il primo elemento corrispondente a quel selettore CSS
console.log("pElId, con querySelector", pElId);
const liEl = document.querySelector("li");
// possiamo passare qualsiasi selettore css, li in questo caso
console.log("liEl", liEl);
const ulClosest = liEl.closest("ul");
// il metodo closest torna l'elemento passato più vicino a quello selezionato,
// in quesot caso l'ul più vicinoas li trovato in precedenza
console.log("ulClosest", ulClosest);

//? questi sono metodi statici, al cambiamento dell'html non cambiano,
//? a differenza di alcuni metodi in disuso che sono dinamici
/* 
! questi restituiscono una collezione di valori che soddisfano i requisiti
elem.getElementsByTagName
elem.getElementsByClassName
elem.getElementsByName
*/

//! Lavorare sui nodi
console.log("nodeType", liEl.nodeType);
// tipo di nodo, valore numerico del tipo
console.log("nodeName", liEl.nodeName);
// nome del nodo
console.log("tagName", liEl.tagName);
// in caso di elementi, anche il tag

liEl.innerHTML = "<p>Prova Testo</p>";
// aggiunge all'interno del tag e riporta la modifica nella pagina parsando il contenuto
liEl.textContent;
// riporta invece come testo senza parsare

console.log("data", liEl.data);
// contenuto del nodo
console.log("textContent", liEl.textContent);
// contenuto testuale

/*
? Gli attributi HTML sono riportati 1:1 nel 90% dei casi nelle proprietà del DOM.
? Lavorare sugli attributi ci permette quindi di lavorare sulle proprietà.
? Per i nodi di tipo elemento (i tag html) esistono delle classi di proprietà 
? che ci consentono di lavorare sugli elementi specifici. ES:
liEl.hidden -> (property) HTMLElement.hidden
*/
//! Per Settare gli attributi
liEl.setAttribute("role", "test");
// settare gli attributi
console.log("hasAttribute", liEl.hasAttribute("role"));
// controllare se sono presenti
console.log("getAttribute", liEl.getAttribute("role"));
// riceve l'attributo
console.log("removeAttribute", liEl.removeAttribute("role"));
// rimuove l'attributo

//? Possiamo definire gli attributi da settare con i data attribute
liEl.setAttribute("data-test", "test");
// 'data-nomeAttributo','attributo' per settare gli attributi
console.log("dataset", liEl.dataset.test);
// tramite i dataset preleviamo, essa contiene tutti i data-attribute.
// È sempre consigliato usare dataset e data-attribute perchè non creano conflitti e sono attributi settati da noi

/* 
!   ATTRIBUTO   <-->     PROPRIETA'
!      ◊                     ◊
!     HTML      <-->    OGGETTO DOM
? In generale è così ma in alcuni casi fa eccezione, come per value
? TIP: se lavoriamo sul DOM, finchè possibile lavorare sulle proprietà
*/

//! Nuovi nodi del DOM
const textNode = document.createTextNode("Nodo Testuale");
// crea un nodo di tipo Testo
const newLiNode = document.createElement("li");
// crea un nodo di tipo element, li nello specifico
newLiNode.innerText = "Un nuovo nodo";
// popolare l'elemento li con del testo
//! queste operazioni creano dei nodi ma non li posizionano nella pagina,
//? Per posizionarli, partendo da un nodo di riferimento:
liEl.append(textNode);
// liEl.prepend(textNode)
// append e prepend posizionano l'elemento passato all'inizio o alla fine di quel elemento selezionato
// ma entro i suoi termini, cioè  entro i tag di apertura e chiusura(dentro il tag)
liEl.after(newLiNode);
// liEl.before(newLiNode)
// after e before posizionano l'elemento prima o dopo quello selezionatto, creandone uno nuovo, un fratello
/* 
?esistono anche:
- replaceWith -> sostituisce interamente il nodo e il suo contenuto
- remove -> rimuove il nodo e il suo contenuto
- cloneNode -> clona il nodo e il suo contenuto
*/
//? esiste anche un metodo shortcut per creare e posizionare nuovi nodi:
liEl.insertAdjacentHTML("beforebegin", "<p>Ancora un altro LI</p>");
// questa è una comoda shortcut per i passaggi visti in precedenza.
// il primo valore indica la posizione, il secondo il contenuto da inserire.
/* 
? Metodi in disuso
- parent.appendChild(node)
- parent.inserBefore(node, newSibling)
- parent.removeChild(node)
- parent.replaceChild(newElem, node)
*/

//! Classi e stili
liEl.className = "my-class";
// assegna una classe a liEl
liEl.classList.add("my-li");
// .remove / .toggle
// prevede una collezione di classi da poter gestire con quei metodi in modo dinamico
liEl.style.backgroundColor = "green";
// impostare uno stile
const computedStyle = getComputedStyle(document.body);
// ritorna tutti gli stili computti dalla pagina, già renderizzati
console.log(computedStyle);

//! GLI EVENTI
//? Per farci interagire la nostra pagina ha bisogno che si verifichino eventi
//? un evento da prendere come esempio può essere il CLICK:
//! 1. possiamo specificarlo inline nell'html, pratica sconsigliata
//! 2. possiamo creae una funzione che lo faccia:
pElId.onclick = function () {
  // dopo ON va specificato il tipo di evento che attiva la reazione
  console.log("click da assegnazione con metodo");
};
// questo metodo andrebbe a sovrascrivere quello inline
//! 3. il metodo più usato è quello con gli handler ed eventListener
function handler() {
  console.log("un click da eventListener");
}
liEl.addEventListener("click", handler); // ('evento', reazione)
// addEventListener ci permette di agganciare una o più reazioni ad uno o più eventi
liEl.removeEventListener("click", handler); // per rimuovere la reazione
//! ripetendo ad un elemento .addEventListener, le reazioni saranno consecutive e non
//! sovrascriveranno le precedenti, come non succedeva con l'attributo onclick inline.
//! Questo inteso per lo stesso evento, cioè con un singolo click.
//
//! È possibile, nel parametro che indica la reazione, specificare una funzione di callback,
//! il cui parametro immagazzina l'evento che scaturisce la reazione:
liEl.addEventListener("click", (event) => {
  console.log("un altro click da eventListener");
  console.log("event", event);
  // event.stopPropagation()
});
// verrà mostrato il tipo di evento con le relative info che ha scaturito la reazione, click in questo caso.
// possiamo lavorare sulle info dell'evento, ad esempio nel caso di input di un form

/*
! BUBBLING
? Gli eventi seguono questa dinamica in js, se ci sono eventi sia nei figli che nei genitori, attivando gli
? eventi nei figli si attiveranno anche quelli nei rispettivi genitori. 
? Un po' come l'acqua e le sue bolle, partono dal basso per ricrearsi fino alla cima.
2°UL
1°LI
*/
ulClosest.addEventListener("click", (event) => {
  console.log("click UL da eventListener");
  console.log("target", event.target);
});
// con event.target possiamo individuare cosa ha attivato il nostro evento,
//in questo caso cliccando su LI si attiverebbe anche UL ed even.target darebbe <li></li> come risultato

//? per fermare il bubbling è necessario indicare all'elemento più interno:
// event.stopPropagation() -> in questo caso ad LI

//? per annullare comportamenti di default della pagina, come ad esempio l'apertura di un link al
//? click di un tag <a></a>, si usa event.preventDefault() che previene comportamenti di default
document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  // OPPURE return false
});

//! LA GESTIONE DEGLI EVENTI è FONDAMENTALE MA SOPRATTUTTO ASINCRONA
