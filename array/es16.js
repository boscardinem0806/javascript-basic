/*
  ESERCIZIO RIASSUNTIVO 2 - Unione liste

  Data una lista di invitati ["Anna", "Bob", "Clara"]
  e una seconda lista ["Davide", "Elena"]:
  - unisci le due liste in un unico array
  - restituisci l'array unito
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es16() {
  const lista1 = ["Anna", "Bob", "Clara"];
  const lista2 = ["Davide", "Elena"];
  const listeunite = lista1.concat(lista2);
  // TODO: scrivi qui la tua soluzione
  return listeunite;
}

// --- NON MODIFICARE SOTTO ---
export { es16 };
