/*
  ESERCIZIO RIASSUNTIVO 7 - Conversione secondi

  Dato un numero di secondi passato come parametro:
  - converti in ore, minuti, secondi (HH:MM:SS)
  - esempio: 3661 → 1 ora, 1 minuto, 1 secondo

  Restituisci: { ore: 1, minuti: 1, secondi: 1 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es21(secondi) {
  var ore = Math.floor(secondi / 3600);
  var minuti = Math.floor((secondi % 3600) / 60);
  var secondi = secondi % 60;
  // TODO: scrivi qui la tua soluzione
  return{
    ore: ore, 
    minuti: minuti, 
    secondi: secondi
  }
}

// --- NON MODIFICARE SOTTO ---
export { es21 };
