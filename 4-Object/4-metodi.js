//* METODI NEGLI OGGETTI
//? Un metodo è una proprietà di un oggetto che è eseguibile, in grado di compiere azioni.
//? un metodo può essere una funzione come proprietà di un oggetto.

// riprendiamo il nostro oggetto
let vehicleType = "car";
let hero = {
  name: "Batman",
  weapon: "Batarang",
  "best partner": "Robin",
  [vehicleType]: "Batmobile",
  call: function () {
    return `Help Me ${this.name}`;
  },
};
/*  //! Questa proprietà dell'oggetto prende il nome di metodo
    call: function () {
        return `Help Me ${this.name}`;
    } 

*/
/*  //! Sintassi ES6 per indicare un metodo funzione
    reCall() {
        return `Help Me ${this.name}`;
    } 

*/

// this.chiave ci permette di andare a prendere ulteriori proprietà dello stesso oggetto,
// dopo il punto, puntiamo alla proprietà o al metodo che ci interessa
