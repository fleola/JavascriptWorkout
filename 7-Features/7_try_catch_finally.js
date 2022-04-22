//* TRY CATCH FINALLY
//! ERROR HANDLING
//? JS è un linguaggio che viene eseguito in run-time e non è compilato.
//?Se ci sono errori li scopriamo solo nel momento dell'esecuzione,
//? quindi avremo l'errore e il nostro script non funzionerà. Per evitare il crash
//?si adottano alcuni meccanismi preventivi per gestire la cosa. Uno di questi è il TRY-CATCH

//?Nel TRY andremo a specificare le azioni da compiere , nel caso ci fossero errori, specificati con THROW,
//? andrebbe ad eseguire il CATCH, il quale conterrà istruzioni su cosa fare in caso di errori.
//? Se non ci sono errori il CATCH non viene eseguito.
//?Il catch richiede un parametro in entrata, questo porterà con sè l'errore

//? I blocchi TRY-CATCH lavorano in maniera sincrona, possono essere nidificati quindi
//? fare attenzione nel momento in cui nidifichiamo operazioni asincrone come un setTimeout
function sayHelp() {
  try {
    //console.log(`Help me ${hero.name}`)
    //questo genererebbe un errore, hero.name non esiste
    throw new SyntaxError("Dati incompleti: manca name");
    // con THROW lanciamo un errore e il nostro programma si ferma
  } catch (err) {
    // err è un parametro che ingloba l'errore generato
    /*  
        console.log('nome', err.name)
        console.log('message', err.message)
        console.log('stack', err.stack)
        Esempio di proprietà di Error, le proprietà di error ci danno info specifiche riguardo l'errore utili per debug
        
        console.log(err) 
        Darà il tipo di errore e tutte le info
        */
    if (err instanceof ReferenceError) {
      console.log("Reference Error");
    } else {
      throw err;
    }
    //In questo blocco abbiamo un TRY CATCH nidificato che controlla il tipo di errore, se non
    //rispetta la condizione lancia di nuovo un errore bloccando il programma
  }
  console.log("Lorem Ipsum");
  //In caso di errore questo non viene eseguito
}

try {
  sayHelp();
} catch (err) {
  console.log(`Catch esterno: ${err}`);
} finally {
  console.log("Finally");
}
// All'esterno della funzione possiamo gestire il flusso e gli errori.
// Nel try la eseguiamo e nel catch catturiamo gle eventuali errori generati,
// Il FINALLY viene eseguito dopo il TRY e CATCH a prescindere dall'esito dello script o errori.
