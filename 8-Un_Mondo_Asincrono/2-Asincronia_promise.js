//* PROMISE
//? usando le callback il nostro codice rischia di diventare impossibile da leggere,
//? per questo hanno inventato le promise. Promise è un costrutto JS che crea un oggetto che esegue
//? una funzione (executor), queesta può essere asincrona, alla quale possiamo sottoscriverci in attesa
//? del risultato per poi fare le nostre operazioni.

// l'oggetto Promise ha con se sempre gli stessi parametri:
//! resolve: ritorna un valore da far uscire all'esterno,
//! reject fa il contrario, emettendo un errore
// la Promise al suo interno ha degli stati, lavorando in async possiamo conoscere lo stato della promise
//? Una promise quindi emette un valore con un approccio asincrono
function demoPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
      //reject (new Error('Questo è un errore'))
    }, 1000);
  });
}
// creiamo la promise
let promise = demoPromise("hero");
//metodo chain usando il .then, il THEN serve per scoltare il valore emerso dalla promise,
//di conseguenza scegliere come comportarsi
promise
  .then((name) => {
    console.log(`Help me ${name}`);
    return "Batman";
  })
  //! CHAIN PROMISE
  //? in caso di semplici return i then vengono eseguiti normalmente
  //? nel momento in cui facciamo return in un .then possiamo concatenarli ed eseguirli uno dopo l'altro.
  //? il then successivo riceverà il return del precedente.
  //? è possibile tornare una promise in modo da ripeterne l'asincronia nell'esecuzione.
  .then((name) => {
    console.log(`I'm ${name}`);
    return demoPromise("night");
  })
  .then((name) => {
    console.log(`And I'm the ${name}`);
  })
  //! PROMISE ERRORS
  //? È possibile verificare se c'è qualche valore rejected con catch.
  //? i metodi catch si comportano esattamente come i then.
  //? in caso di errore, questo  viene passato al primo catch trovato
  //? Questa operazione non è bloccante, infatti l'esecuzione continuerebbe a meno che nel catch non venga
  //? lanciato un errore che non viene poi gestito in seguito.
  //? Il blocco finally viene eseguito sempre a prescindere, alla fine di tutti gli altri
  .catch((err) => {
    console.log("È stato provocato un errore", err);
    throw new Error("Errore!!!");
  })
  .then(() => {
    console.log(
      "Questo then viene eseguito se non ci sono ulteriori throw di error"
    );
  })
  .catch((err) => {
    console.log("Errore in rethrow", err);
  })
  .finally(() => {
    console.log("Questo log sarà sempre mostrato");
  });

//! PROMISE API
//? Esistono alcune API per le Promise per gestirle al meglio
// Promise.all consente di raggruppare un insieme di promise ed eseguirle tutte insieme,
// il risultato sarà un array con i valori risolti, se c'è un errore il risultato sarà un errore
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then(console.log);

//! Promise.allSettled(promises)
//? consente di aggregare le promise e restituisce i valori di ogni promise, che siano resolve o reject

//! Promise.race(promises)
//?restituisce la prima promise ad essere eseguita in ordine di tempo, che sia resolve o reject

//! Promise.any(promises)
//? ritorna il valore della promise ma nel caso in cui tutte fallissero ritorna un aggregate error

//! Promise.resolve(value)
//! Promise.reject(error)
//? Sono due shortcut per evitare i creare una promise solo per resolve o reject

//! ASYNC AWAIT
//? Esiste un'ulteriore metodo per snellire le promise e tutto il processo asincrono basato su async e await

//con async specifichiamo che quella è una funzione asincrona,
// await "aspetta" l'esecuzione della promise,
// il risultato è lo stesso
async function demo() {
  let genericHero = await demoPromise("hero");
  console.log(`Help me ${genericHero}`);
  let bestHero = await demoPromise("Batman");
  console.log(`I'm ${bestHero}`);
  let akaHero = await demoPromise("Night");
  console.log(`but I0m ${akaHero}`);
}
demo();
