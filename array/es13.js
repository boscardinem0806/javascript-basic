/*
  ESERCIZIO 13 - filter()

  .filter() crea un nuovo array con solo gli elementi che
  soddisfano una condizione.

  Sintassi:  array.filter(funzione)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function numero(a){
  return a > 10;
} 
function es13_1(arr) {
  // 1. Restituisci solo i numeri maggiori di 10
  // TODO: scrivi qui la tua soluzione
  return arr.filter(numero);
}

function numero2(b){
  return b.length >= 5;
} 
function es13_2(arr) {
  // 2. Restituisci solo le stringhe con lunghezza >= 5
  // TODO: scrivi qui la tua soluzione
  return arr.filter(numero2);
}

function numero3(c){
  return c % 2 === 0;
}
function es13_3(arr) {
  // 3. Restituisci solo i numeri pari
  // TODO: scrivi qui la tua soluzione
  return arr.filter(numero3);
}

// --- NON MODIFICARE SOTTO ---
export { es13_1, es13_2, es13_3 };
