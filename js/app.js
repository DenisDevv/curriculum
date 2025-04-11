let opzioni = 2; // partiamo da 2 visto che sono già presenti opzione0 e opzione1
function init() {
  // ...existing code... (eventuali altri inizializzatori)
}
function rimuovi(opzione) {
    var elemento = document.getElementById(opzione);
    elemento.parentNode.removeChild(elemento);
}
function aggiungi(opzione) {
  let newId = `opzione${opzioni++}`;
  let div = document.getElementById(opzione);
  // Modifica: Creiamo un div con classe "opzione" anziché un tag custom "opzione"
  let newElement = document.createElement('div');
  newElement.className = 'opzione';
  switch (opzione) {
    case "esperienze": {
      newElement.id = newId;
      newElement.innerHTML = `
        <label for="azienda">Azienda:</label>
        <input type="text" id="azienda" name="azienda[]">
        <label for="dal">Dal:</label>
        <input type="text" id="dal" name="dal[]">
        <label for="al">Al:</label>
        <input type="text" id="al" name="al[]">
        <button type="button" onclick="rimuovi('${newId}')">Rimuovi</button>
      `;
      break;
    }
    // ...existing code...
  }
  div.appendChild(newElement);
}
