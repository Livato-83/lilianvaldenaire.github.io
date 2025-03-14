window.onload = () => {
    chargerJeu();
};


const button = document.getElementById("cookie");

let nbrClicks = parseInt(localStorage.getItem("score")) || 0;
let clicksPrice = parseInt(localStorage.getItem("score")) || 10;;
let multiplicateurAutoClicks = parseInt(localStorage.getItem("score")) || 1;;
let grandmaPrice = parseInt(localStorage.getItem("score")) || 50;;


function chargerJeu() {
    nbrClicks = parseInt(localStorage.getItem("nbrClicks")) || 0;
    clicksPrice = parseInt(localStorage.getItem("clicksPrice")) || 10;
    grandmaPrice = parseInt(localStorage.getItem("grandmaPrice")) || 50;
    console.log("Jeu chargé :", nbrClicks, clicksPrice, grandmaPrice);
};

function sauvegarderJeu() {
    localStorage.setItem("nbrClicks", nbrClicks);
    localStorage.setItem("clicksPrice", clicksPrice);
    localStorage.setItem("grandmaPrice", grandmaPrice);
};

function autoClicker(nbrClicks, multiplicateurAutoClicks){
    nvNbrClicks = nbrClicks + 1;
    return nvNbrClicks;
}

function buyAutoClicker(nbrClicks, clicksPrice, multiplicateurAutoClicks){
    if (nbrClicks < clicksPrice){
        return 0;
    }
    else{
        nvClicksPrice = clicksPrice + Math.round(clicksPrice/0.3) ;
        nvMultiplicateurAutoClicks =multiplicateurAutoClicks + 1;
        return nvClicksPrice, nvMultiplicateurAutoClicks;
    }
};

setInterval(sauvegarderJeu, 30000);
setInterval(autoClicker(nbrClicks), 1000)

button.addEventListener("click", (event) => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;
    nbrClicks ++;
    console.log(nbrClicks);
});

