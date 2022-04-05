//*Callbacks

//? è possibile passare come argomento di una funzione, un'altra funzione (il suo risultato)

function sayHelp(hero) {
  console.log("l ${hero}");
}
function callBestHero(caller) {
  const hero = "Batman";
  caller(hero);
}
callBestHero(sayHelp);

//  in questo esempio: quando richiamiamo callBestHero passiamo come argomento la funzione sayHelp.
//  "caller" quindi sarà la funzione sayHelp, quando eseguiamo callBestHero
//  "caller(hero)" nel pratico assumerà il valore di "sayHelp('Batman')"
// All'esecuzione di callBestHero sarà quindi eseguita sayHelp al suo interno
