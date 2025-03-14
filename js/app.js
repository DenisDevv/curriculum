function rimuovi(opzione) {
    var elemento = document.getElementById(opzione);
    elemento.parentNode.removeChild(elemento);
}
function aggiungi(opzione) {
  switch (opzione) {
    case "esperienze": {
      let div = document.getElementById(opzione);
      let newId = 'opzione' + (document.querySelectorAll('#' + opzione + ' > opzione').length + 1);
      let newElement = document.createElement('opzione');
      newElement.id = newId;
      newElement.innerHTML = `
        <label for="azienda">Azienda:</label>
        <input type="text" id="azienda" name="azienda">
        <label for="dal">Dal:</label>
        <input type="text" id="dal" name="dal">
        <label for="al">Al:</label>
        <input type="text" id="al" name="al">
        <button onclick="rimuovi('${newId}')">Rimuovi</button>
      `;
      div.appendChild(newElement);
      break;
    }
    case "titoli": {
      let div = document.getElementById(opzione);
      let newId = 'opzione' + (document.querySelectorAll('#' + opzione + ' > opzione').length + 1);
      let newElement = document.createElement('opzione');
      newElement.id = newId;
      newElement.innerHTML = `
        <label for="titolo">Titolo:</label>
        <input type="text" id="titolo" name="titolo">
        <label for="scuola">Scuola:</label>
        <input type="text" id="scuola" name="scuola">
        <button onclick="rimuovi('${newId}')">Rimuovi</button>
      `;
      div.appendChild(newElement);
      break;
    }
  }
}
async function stampa() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.style.display = 'none');
  const element = document.body;
  await html2pdf().from(element).save('curriculum.pdf');
  await buttons.forEach(button => button.style.display = 'block');
}
