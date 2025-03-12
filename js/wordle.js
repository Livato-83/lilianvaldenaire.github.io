let mots = [];
let motSecret = '';
let essais = [];

document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const guessInput = document.getElementById('guess');
  const submitButton = document.getElementById('submit');
  const boardElement = document.getElementById('board');
  const messageElement = document.querySelector('[id="message"]');
  fileInput.addEventListener('change', onFileChange);
  guessInput.addEventListener('keydown', onKeyPress);
  submitButton.addEventListener('click', onSubmit);
  function afficherBoard() {
    boardElement.innerHTML = '';
    essais.forEach((mot) => {
      for (let i = 0; i < 5; i++) {
        const cell = document.createElement('div');
        cell.textContent = mot[i];
        cell.style.border = 'solid 1px white';
        cell.style.paddingTop = '9px';
        cell.style.paddingBottom = '9px';
        cell.style.fontSize = '20px';
        cell.style.textTransform = 'uppercase';
        cell.style.borderRadius = '10px';
        cell.style.fontWeight = 'bolder';
        if (mot[i] === motSecret[i]) {
          cell.classList.add('correct');
          cell.style.backgroundColor = '#48af18';
        } else if (motSecret.includes(mot[i])) {
          cell.classList.add('present');
          cell.style.backgroundColor = '#ebb042';
        } else {
          cell.classList.add('absent');
          cell.style.backgroundColor = '#252627';
        }
        boardElement.appendChild(cell);
      }
    });
  }
  function onFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        mots = content.split('\n').map(mot => mot.trim().toLowerCase());
        motSecret = mots[Math.floor(Math.random() * mots.length)];
        messageElement.textContent = 'Le mot secret a été choisi !';
        afficherBoard();
      };
      reader.readAsText(file);
    }
  }
  function onSubmit() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 5) {
      messageElement.textContent = 'Le mot doit contenir 5 lettres.';
      return;
    }
    if (!mots.includes(guess)) {
      messageElement.textContent = 'Mot non reconnu.';
      return;
    }
    essais.push(guess);
    afficherBoard();
    guessInput.value = '';
    if (guess === motSecret) {
      messageElement.innerHTML = `Bravo ! Vous avez trouvé le mot !<br>`;
      ajouterLienDefinition();
      guessInput.disabled = true;
    } else if (essais.length === 6) {
      messageElement.innerHTML = `Dommage ! Le mot était "${motSecret}".<br>`;
      ajouterLienDefinition();
      guessInput.disabled = true;
    }
  }
  function ajouterLienDefinition() {
    const lien = document.createElement('a');
    lien.href = `https://1mot.net/${motSecret}`;
    lien.textContent = 'Définition';
    lien.target = '_blank';
    lien.style.textDecoration = 'none';
    lien.style.color = 'inherit';
    lien.style.display = 'inline-block';
    lien.style.marginTop = '8px';
    messageElement.appendChild(lien);
  }
  function onKeyPress(event) {
    if (event.key === 'Enter') {
      onSubmit();
    }
  }
});
