window.onload = () => {
    chargerJeu();
    updatesInfos();
};

const button = document.getElementById("cookie");

let nbrClicks = parseInt(localStorage.getItem("nbrClicks")) || 0;
let nbrClicksTotal = parseInt(localStorage.getItem("nbrClicksTotal")) || 0;
let clicksPrice = parseInt(localStorage.getItem("clicksPrice")) || 15;
let nbrAutoClicks = parseInt(localStorage.getItem("nbrAutoClicks")) || 0;
let multiplicateurAutoClicks = parseFloat(localStorage.getItem("multiplicateurAutoClicks")) || 0;
let grandmaPrice = parseInt(localStorage.getItem("grandmaPrice")) || 100;
let nbrGrandma = parseInt(localStorage.getItem("nbrGrandma")) || 0;
let multiplicateurGrandma = parseFloat(localStorage.getItem("multiplicateurGrandma")) || 0;
let farmPrice = parseInt(localStorage.getItem("farmPrice")) || 1100;
let nbrFarm = parseInt(localStorage.getItem("nbrFarm")) || 0;
let multiplicateurFarm = parseFloat(localStorage.getItem("multiplicateurFarm")) || 0;
let successFirstClickVar = Boolean(localStorage.getItem("successFirstClickVar")) || false;
let successTenClicksVar = Boolean(localStorage.getItem("successTenClickVar")) || false;
let successHundredClicksVar = Boolean(localStorage.getItem("successHundredClickVar")) || false;
let successThousandClicksVar = Boolean(localStorage.getItem("successThousandClickVar")) || false;
let successFirstBuyVar = Boolean(localStorage.getItem("successFirstBuyVar")) || false;
let successFirstGrandmaVar = Boolean(localStorage.getItem("successFirstGrandmaVar")) || false;
let successFirstFarmVar = Boolean(localStorage.getItem("successFirstFarmVar")) || false;
let successTenAutoClickersVar = Boolean(localStorage.getItem("successTenAutoClickersVar")) ||false;
let intervalAutoClicker = null;

function chargerJeu() {
    nbrClicks = parseFloat(localStorage.getItem("nbrClicks")) || 0;
    nbrClicksTotal = parseFloat(localStorage.getItem("nbrClicksTotal")) || 0;
    clicksPrice = parseInt(localStorage.getItem("clicksPrice")) || 15;
    multiplicateurAutoClicks = parseFloat(localStorage.getItem("multiplicateurAutoClicks")) || 0;
    grandmaPrice = parseInt(localStorage.getItem("grandmaPrice")) || 100;
    multiplicateurGrandma = parseFloat(localStorage.getItem("multiplicateurGrandma")) || 0;
    nbrAutoClicks = parseInt(localStorage.getItem("nbrAutoClicks")) || 0;
    nbrGrandma = parseInt(localStorage.getItem("nbrGrandma")) || 0;
    multiplicateurFarm = parseFloat(localStorage.getItem("multiplicateurFarm")) || 0;
    farmPrice = parseInt(localStorage.getItem("farmPrice")) || 1100;
    nbrFarm = parseInt(localStorage.getItem("nbrFarm")) || 0;
    successFirstClickVar = Boolean(localStorage.getItem("successFirstClickVar")) || false;
    successTenClicksVar = Boolean(localStorage.getItem("successTentClickVar")) || false;
    successHundredClicksVar = Boolean(localStorage.getItem("successHundredtClickVar")) || false;
    successThousandClicksVar = Boolean(localStorage.getItem("successThousandClickVar")) || false;
    successFirstBuyVar = Boolean(localStorage.getItem("successFirstBuyVar")) || false;
    successFirstGrandmaVar = Boolean(localStorage.getItem("successFirstGrandmaVar")) || false;
    successFirstFarmVar = Boolean(localStorage.getItem("successFirstFarmVar")) || false;
    successTenAutoClickersVar = Boolean(localStorage.getItem("successTenAutoClickersVar")) ||false;

    if (nbrAutoClicks > 0 || nbrGrandma > 0 || nbrFarm > 0) {
        startAutoClicking();
    }

    console.log("Jeu chargé :", nbrClicks, clicksPrice, multiplicateurAutoClicks, grandmaPrice, multiplicateurGrandma);
}

function sauvegarderJeu() {
    localStorage.setItem("nbrClicks", nbrClicks);
    localStorage.setItem("nbrClicksTotal", nbrClicksTotal);
    localStorage.setItem("clicksPrice", clicksPrice);
    localStorage.setItem("multiplicateurAutoClicks", multiplicateurAutoClicks);
    localStorage.setItem("grandmaPrice", grandmaPrice);
    localStorage.setItem("multiplicateurGrandma", multiplicateurGrandma);
    localStorage.setItem("nbrAutoClicks", nbrAutoClicks);
    localStorage.setItem("nbrGrandma", nbrGrandma);
    localStorage.setItem("farmPrice", farmPrice);
    localStorage.setItem("multiplicateurFarm", multiplicateurFarm);
    localStorage.setItem("nbrFarm", nbrFarm);
    localStorage.setItem("successFirstClickVar", successFirstClickVar);
    localStorage.setItem("successTenClicksVar", successTenClicksVar);
    localStorage.setItem("successHundredClicksVar", successHundredClicksVar);
    localStorage.setItem("successThousandClicksVar", successThousandClicksVar);
    localStorage.setItem("successFirstBuyVar", successFirstBuyVar);
    localStorage.setItem("successFirstGrandmaVar", successFirstGrandmaVar);
    localStorage.setItem("successFirstFarmVar", successFirstFarmVar);
    localStorage.setItem("successTenAutoClickersVar", successTenAutoClickersVar);
}

function updatesInfos() {
    let clicksZone = document.getElementById("count_clicks");
    clicksZone.textContent = nbrClicks.toFixed(1) + ' Clicks';

    let buttonClickerAuto = document.getElementById("batClicker");
    buttonClickerAuto.textContent = 'Auto clicker: ' + clicksPrice + ' Clicks';

    let buttonGrandma = document.getElementById("batGrandma");
    buttonGrandma.textContent = 'Grand-mère: ' + grandmaPrice + ' Clicks';

    let buttonFarm = document.getElementById("batFarm");
    buttonFarm.textContent = 'Ferme: ' + farmPrice + ' Clicks';

    if (nbrAutoClicks > 0) showClickersBat();
    if (nbrGrandma > 0) showGrandmaBat();
    if (nbrFarm > 0) showFarmBat();

    successTenClicks();
    successHundredClicks();
    successThousandClicks();
    successFirstBuy();
    successFirstGrandma();
    successFirstFarm();
    successTenAutoClickers();
}

function autoClicker() {
    nbrClicks  += multiplicateurAutoClicks;
    nbrClicksTotal += multiplicateurAutoClicks;
    nbrClicks += multiplicateurGrandma;
    nbrClicksTotal += multiplicateurGrandma;
    nbrClicks += multiplicateurFarm;
    nbrClicksTotal += multiplicateurFarm;


}

function startAutoClicking() {
    if (!intervalAutoClicker) {
        intervalAutoClicker = setInterval(autoClicker, 1000);
    }
}

setInterval(sauvegarderJeu, 10000);
setInterval(updatesInfos, 10);



button.addEventListener("click", () => {
    if (successFirstClickVar === false){
        successFirstClickVar = true;
        successFirstClick();
    }
    nbrClicks++;
    nbrClicksTotal++;
    
});




function reset() {
    localStorage.clear();
    location.reload();  
}

// Achat AutoClicker
function buyAutoClicker() {
    if (nbrClicks >= clicksPrice) {
        nbrClicks -= clicksPrice;
        multiplicateurAutoClicks += 0.1;
        nbrAutoClicks += 1;
        clicksPrice = Math.round(clicksPrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("AutoClicker acheté !");
    } else {
        console.log("Pas assez de clics pour acheter un AutoClicker.");
    }
}

function showClickersBat() {
    let showClickers = document.getElementById("showBatClickers");
    showClickers.textContent = '👆 '.repeat(nbrAutoClicks);
}

// Achat Grandma
function buyGrandma() {
    if (nbrClicks >= grandmaPrice) {
        nbrClicks -= grandmaPrice;
        multiplicateurGrandma += 1;
        nbrGrandma += 1;
        grandmaPrice = Math.round(grandmaPrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Grandma achetée !");
    } else {
        console.log("Pas assez de clics pour acheter une Grandma.");
    }
}

function showGrandmaBat() {
    let showGrandma = document.getElementById("showBatGrandma");
    showGrandma.textContent = '👵 '.repeat(nbrGrandma);
}

// Achat Farm
function buyFarm() {
    if (nbrClicks >= farmPrice) {
        nbrClicks -= farmPrice;
        multiplicateurFarm += 1;
        nbrFarm += 1;
        farmPrice = Math.round(farmPrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Farm achetée !");
    } else {
        console.log("Pas assez de clics pour acheter une Farm.");
    }
}

function showFarmBat() {
    let showFarm = document.getElementById("showBatFarm");
    showFarm.textContent = '👨‍🌾 '.repeat(nbrFarm);
}

// functions for success

function popupSuccess(title, description){
    const popup = document.getElementById("success-popup");
    const popupTitle = document.getElementById("success-title");
    const popupDescription = document.getElementById("success-description");

    popupTitle.textContent = title;
    popupDescription.textContent = description;

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 5000);
}


function successFirstClick(){
    const description = 'Tu as fait ton tout premier clic.';
    const title = 'Premier Clic!';
    popupSuccess(title, description); 
}

function successTenClicks(){
    if (nbrClicksTotal >= 10 && successTenClicksVar === false){
        const description = 'Tu as atteint 10 clics.';
        const title = 'Depart prometteur';
        popupSuccess(title, description); 
        successTenClicksVar = true;
    }
}

function successHundredClicks(){
    if (nbrClicksTotal >= 100 && successHundredClicksVar === false){
        const description = 'Tu as atteints 100 clics.';
        const title = 'Accro aux clics!';
        popupSuccess(title, description); 
        successHundredClicksVar = true;
    }
}

function successThousandClicks(){
    if (nbrClicksTotal >= 1000 && successThousandClicksVar === false){    
        const description = 'Tu as atteints 1000 clics.';
        const title = 'Maître du clic';
        popupSuccess(title, description);
        successThousandClicksVar = true;
    } 
}

function successFirstBuy(){
    if (nbrAutoClicks === 1 && successFirstBuyVar === false){
        const description = 'Tu as acheté ton premier AutoClicker.';
        const title = 'Un premier achat';
        popupSuccess(title, description);
        successFirstBuyVar = true;
    }
}

function successFirstGrandma(){
    if (nbrGrandma === 1 && successFirstGrandmaVar === false){
        const description = 'Tu as recruté ta première grand-mère.';
        const title = 'Mamie au boulot!';
        popupSuccess(title, description);
        successFirstGrandmaVar = true;
    }
}

function successFirstFarm(){
    if (nbrFarm ===1 && successFirstFarmVar === false){
        const description = 'Tu as acheté ta première ferme.';
        const title = 'Petite ferme tranquille';
        popupSuccess(title, description);
        successFirstFarmVar = true;
    }
}

function successTenAutoClickers(){
    if (nbrAutoClicks ===10 && successTenAutoClickersVar === false){
        const description = 'Tu possèdes 10 AutoClickers.';
        const title = 'Usine à clics';
        popupSuccess(title, description);
        successTenAutoClickersVar = true;
    }
}