//* LE CLASSI
//? Una classe è un'insieme di regole che può essere riutilizzate.
//?In particolare in JS viene usata per creare strutture agnostiche e atomiche per oggetti
//? Sono state introdotte in ES6 infatti sono ancora in fase di introduzione

//! SINTASSI
class Hero {
  //Dichiarazione di una classe, si usa la chiave class con l'uppercase
  static role = "Superhero";
  //Le proprietà statiche sono insite della classe, possono essere chiamate senza istanziare un oggetto
  // Possono anche essere chiamate senza un istanza
  //sono usati per far valere al di sopra dell'oggetto, come regole generali
  //Si dichiarano usando la key STATIC

  #city;
  //attributo privato, non può essere ereditato o chiamato dall'esterno

  power = "Strong";
  //attributo pubblico, visibile sempre

  _nome = "";
  //con _ si dichiara un attributo privato, oggi si prefersce#

  constructor(name, city = "Gotham") {
    this._nome = name;
    this.#city = city;
  }
  // con il costruttore "construction" si esplicita la struttura che può avere un oggetto istanziato dalla classe
  // i parametri specificati saranno passati in fase di creazione dell'oggetto.
  // gli attributi si specificano sempre con this che fa riferimento all'oggetto e al costruttore

  sayHelp() {
    console.log(this._nome, this.#city);
  }
  //Si possono dichiarare anche i metodi in una classe, seguono la stessa sintassi

  get nome() {
    return this._nome;
  }
  set nome(value) {
    if (value.length < 4) {
      alert("Name is too short");
      return;
    }
    this._nome = value;
  }
  // I metodi GET E SET vengono usati per richiamare e usare una proprietà o un metodo.
  //SET verrà usato per specificare le azioni da compiere, esso verrà chiamato da GET che lo eseguirà
  // GET è quello che viene eseguito quando chiamiamo la proprietà dall'esterno.
  // CHIAMATA->GET->SET
}

//! Come si istanzia un oggetto?
// Sintassi per creare un'istanza della classe, quindi un oggetto usando il costruttore
let hero = new Hero("Batman");
// per chiamare dei metodi della classe:
hero.sayHelp();
//role può essere chiamata direttamente
console.log(Hero.role);

//! EREDITARIETA'
//? Una classe può ereditare un'altra classe. un po' come classe genitore e classe figlia.
//? Così facendo eredita tutte le proprietà e i metodi della classe estesa
class Superhero extends Hero {
  //SuperHero sarà figlia di Hero e ne erediterà il contenuto
  constructor(name, city, team) {
    super(name, city);
    this.team = team;
  }
  //questo è un richiamo al costruttore padre, della classe genitore.
  // SUPER È FONDAMENTALE. permette di ereditare i metodi e le proprietà del genitore
  // oltre a permettere il funzionamento del costruttore

  ban() {
    console.log("Ban all heroes");
  }
  //Si possono dichiarare dei metodi appartenenti alla classe figlia
}

//Si istanzia allo stesso modo,
// istanziando un oggetto della classe figlia, questo erediterà tutte le proprietà e i valori del genitore
let superHero = new Superhero("Leo", "Somma", "Antengo");
//in fase di istanza passiamo tutti i valori come parametro

superHero.sayHelp();
//è possibile chiamare direttamente i metodi ereditati dalla classe genitore

superHero.ban();
//è possibile chiamare direttamente i metodi della classe figlia

console.log(Superhero.role);
//possiamo chiamare direttamente un attributo ereditato con questa sintassi anche se statico.

//! OPERATORE INSTANCEOF
//?Instanceof ci permette di sapere un oggetto a quale classe appartiene, l'istanza di cosa sia (BOOL)
//Sintassi: "istanza di classe""instanceof""classe"
console.log(hero instanceof Hero); //true
console.log(hero instanceof Superhero); //false

//Nel caso di ereditarietà, il confronto sarà sempre vero in entrambi i casi,
//l'istanza apparterrà sia al genitore che al figlio
console.log(superHero instanceof Hero); //true
console.log(superHero instanceof Superhero); //true
