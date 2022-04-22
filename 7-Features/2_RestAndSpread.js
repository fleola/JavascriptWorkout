//*REST AND SPREAD OPERATORS
//!REST
//? Il rest operator si indica con i 3 puntini, quando viene usato in fase di destrutturazione
//? conterrà al suo interno tutti gli elementi in eccedenza sottoforma di array
let [a, b, ...c] = [1, 2, 3, 4];
console.log(a, b, c); // 1 2 [ 3, 4 ]

//È utile anche con le funzioni, si comporta allo stesso modo
//Quando passiamo più valori di quelli che sono i parametri,
//quelli in eccesso verranno messi in un array col nome del rest operator
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); //Bruce Wayne
  console.log(titles[0]); //Hero
  console.log(titles[1]); //Superhero
  console.log(titles.length); //2
}
showName("Bruce", "Wayne", "Hero", "Superhero");

//! SPREAD
//!Spread con array
//? Prende un array o un oggetto e lo "esplode", ne ricava il contenuto preso singolarmente
//? Fa il contrario del rest operator
//usando la stessa sintassi, possibile fare il processo inverso da array a valori.
//Infatti il log dell'array sarà diverso dal log di ...array
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(arr1); //[ 1, -2, 3, 4 ]
console.log(...arr1); //1 -2 3 4
console.log(Math.max(...arr1)); //4 //Con Math.max() ottieni il massimo dei numeri passati in ()

//possiamo usare lo spread per passare parametri di una funzione
let heroes = ["Bruce", "Wayne", "Hero", "Superhero"];
showName(...heroes); //!Queste due sintassi fanno la stessa cosa
showName("Bruce", "Wayne", "Hero", "Superhero"); //!!!!!

// possiamo usare lo spread per unire due array diversi
let newArr = [...arr1, ...arr2];
console.log(newArr); //[ 1, -2,  3, 4, 8,  3, -8, 1]

//!Spread con oggetti
//? Lo spread con gli oggetti si comporta allo stesso modo: li esplode fornendo coppie chiave-valore
let obj1 = {
  type: "Batmobile",
  price: 200,
  owner: "Batman",
};
let obj2 = {
  type: "Batmobile",
  price: 300,
  color: "Black",
};
console.log(obj1);
//{ type: 'Batmobile', price: 200, owner: 'Batman' }

console.log({ ...obj1 });
//{ type: 'Batmobile', price: 200, owner: 'Batman' }
//Con questa sintassi creiamo un nuovo oggetto indiccando le Graffe {},
// al suo interno ci saranno le coppie chiave-valore dell'oggetto di cui facciamo lo spread
// di conseguenza il risultato sarà lo stesso

console.log({ ...obj1, ...{ price: 2000 } });
//{ type: 'Batmobile', price: 2000, owner: 'Batman' }
//In questo caso creiamo un oggetto vuoto, al suo interno spread di obj1, poi spread di un oggetto nidificato
//Quindi il contenuto del nested obj sarà esploso formando un unico oggetto, in questo caso
// la proprietà andrà a sovrascrivere quela già esistente nell'oggetto (price)

//Possiamo usarlo per creare nuovi oggetti
let newObj = { ...obj1, ...obj2, seats: 3, ...{ price: 3000000 } };
console.log(newObj);
//{    type: 'Batmobile', price: 3000000,owner: 'Batman',color: 'Black', seats: 3}
//Lo spread di obj2 sovrascrive quello di onj1, viene aggiunta la proprietà seats con il relativo valore 3
// poi viene esploso l'oggetto nidificato ottenendo la proprietà price che andrà a sovrascrivere quella esistente
