//*Cicli
let counter = 0;
while (counter < 10) {
  console.log("Ciclo While", counter);
  counter++;
}
//Ciclo while esegue le operazioni finchè a condizione non sia vera

counter = 0; //azzeriamo il counter
do {
  console.log("Ciclo do while", counter);
  counter++;
} while (counter === 0);
//ciclo do while esegue le operazioni, poi verifica la condizione se sia vera e nel caso ripete il ciclo.
//Una sorta di while che esegue almeno un operazione

for (let counter = 0; counter < 10; counter++) {
  console.log("Ciclo for", counter);
}
//Ciclo for, all'interno della condizione è possibile
//1. dichiarare la variabile
//2. porre la condizione
//3. scrivere 'incremento o il decremento
//così si risparmia codice per avere lo stesso risultato del While

counter = 0;
for (; counter < 10; ) {
  console.log("Ciclo for simile al while", counter);
  counter++;
}
//ciclo for simile al while. è possibile usare il for anche non usando tutti i parametri della condizione

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) break;
  console.log("Ciclo for con break", counter);
}
//ciclo for con condizione di break. quando inseriamo il break, all'avverarsi della condizione, il ciclo si interrompe.
//Una sorta di shortcut per forzare l'arresto del ciclo

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) continue;
  console.log("Ciclo for con continue", counter);
}
//ciclo for con condizione continue. all'avverarsi della condizione, il ciclo "salterà quel turno". In questo caso il numero 5 non verrà mostrato.
