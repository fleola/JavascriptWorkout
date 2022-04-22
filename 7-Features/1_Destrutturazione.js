//*DESTRUTTURAZIONE
//? La destrutturazione può essere fatta di un array o di un oggetto.
//? Essa permette di scomporre l'array per prenderne i valori di cui è formato
//!DESTRUTTURAZIONE DI UN ARRAY
// senza la destrutturazione è necessario fare un'operazione del genere per prendere i valori singoli di un'array
let arr = [1, 3, 4, 5, 6, 7];
let a_ = arr[1]; //3
let b_ = arr[3]; //5
console.log(a_, b_); //3,5

//ESEMPIO DI DESTRUTTURAZIONE
// Con a,b ,c indichiamo le posizioni dei valori da prendere nel nostro array
let [a, b, c] = arr;
console.log(a, b, c); //1,3,4

//possiamo anche ladciare una posizione vuota, quel valore verrà saltato e verranno presi solo quelli indicati
let [, d, , e] = arr;
console.log(d, e); //3,5

// Splittando una stringa otterremo un array con i suoi valori che con la seguente sintassi
// andranno a popolare i valori di firstName e surname
let [firstName, surname] = "Bruce Wayne".split(" "); //["Bruce", "Wayne"]
console.log(firstName, surname); // Bruce Wayne

//!Da stringa ad oggetto
//Usando questo metodo possiamo attribuire i valori direttamente alle proprietà di un oggetto partendo da un oggetto vuoto
let user = {};
[user.name, user.surname] = "Bruce Wayne".split(" "); //!
[user.name, user.surname] = ["Bruce", "Wayne"]; //!Queste due sintassi rappresentano la stessa cosa!
console.log(user); //{ name: 'Bruce', surname: 'Wayne' }

//Object.entries ritorna le combo chiave-valore dell'oggetto passato, in questo caso user
//Questo for cicla l'oggetto user per ogni entries, le attribuisce alla coppia [key,value], per poi farne il console.log
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); //name:Bruce surname:Wayne
}

//possiamo assegnare valori di default nel caso non ci fossero valori per popolarne la posizione non sarà undefined
let [name, secondName, nickname = "Anonymous"] = "Bruce Wayne".split(" ");
console.log(name, secondName, nickname); //Bruce Wayne Anonymous

//OtherArgs rappresenta il rest operator, crea un array dove vengono immagazzinati tutti i valori in eccesso
let [name2, secondName2, ...OtherArgs] = "Bruce Wayne da Gotham City".split(
  " "
);
console.log(name2, secondName2, OtherArgs); //Bruce Wayne [ 'da', 'Gotham', 'City' ]

//!DESTRUTTURAZIONE DI UN OBJECT
//? La destrutturazione di un oggetto segue le stesse dinamiche degli array.
//? una delle differenze principali è che i valori non sono posizionali (come per gli array)
//? ma nominali, cioè riprendono esatta,ente il nome delle proprietà indifferentemente dalla posizione indicata
//? In più vengono usate le parentesi graffe e non quadre
const user2Destruct = {
  name: "Bruce",
  surname: "Wayne",
  nickname: "Batman",
};
//Sintassi destrutturazione, i valori sono nominali e non posizionali, infatti non c'è differenza tra i due modi che seguono
//In questo caso si evita di usare il let per evitare errori in ridichiarazione, è importante chiudere tutto in ()
({ name, surname } = user2Destruct);
console.log(name, surname); //Bruce Wayne
({ surname, name } = user2Destruct);
console.log(name, surname); //Bruce Wayne

//possiamo associare un nome variabile al valore indicato (nome: n), oltre a parametri di default (age=10)
//in questo caso è necessario let
let { name: n, surname: s, age = 10 } = user2Destruct;
console.log(n, s, age); //Bruce Wayne 10

//Funziona anche in questo caso il rest operator che va a contenere tutto il resto non indicato
let { name: n2, ...OtherArgs0 } = user2Destruct;
console.log(n2, OtherArgs0); //Bruce { surname: 'Wayne', nickname: 'Batman' }

//Destrutturazione di un oggetto con altri oggetti nidificati
user2Destruct.characteristics = { height: 190, weight: 80 }; //assegnamo un nested OBJECT
let {
  name: n3,
  characteristics: { height },
} = user2Destruct; //Destrutturazione di un nested Object
console.log(n3, height); //Bruce 190

//è possibile destrutturare un oggetto con le stesse dinamiche del ciclo for per gli array
// verrà poi approfondito, giusto saperlo
function showUser({ name: n3, characteristics: { height = 0 } = {} } = {}) {
  console.log(`fnc: ${name} ${height}`);
}
showUser(user2Destruct); //fnc: Bruce 190
showUser(); //fnc: Bruce 0
