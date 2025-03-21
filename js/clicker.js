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
let multiplicateurMine = parseFloat(localStorage.getItem("multiplicateurMine")) || 0;
let minePrice = parseInt(localStorage.getItem("minePrice")) || 12000;
let nbrMine = parseInt(localStorage.getItem("nbrMine")) || 0
let multiplicateurFarm = parseFloat(localStorage.getItem("multiplicateurFarm")) || 0;
let successFirstClickVar = Boolean(localStorage.getItem("successFirstClickVar")) || false;
let successTenClicksVar = Boolean(localStorage.getItem("successTenClickVar")) || false;
let successHundredClicksVar = Boolean(localStorage.getItem("successHundredClickVar")) || false;
let successThousandClicksVar = Boolean(localStorage.getItem("successThousandClickVar")) || false;
let successFirstBuyVar = Boolean(localStorage.getItem("successFirstBuyVar")) || false;
let successFirstGrandmaVar = Boolean(localStorage.getItem("successFirstGrandmaVar")) || false;
let successFirstFarmVar = Boolean(localStorage.getItem("successFirstFarmVar")) || false;
let successTenAutoClickersVar = Boolean(localStorage.getItem("successTenAutoClickersVar")) ||false;
let successFirstMineVar = Boolean(localStorage.getItem("successFirstFactoryVar")) || false;
let multiplicateurFactory = parseFloat(localStorage.getItem("multiplicateurFactory")) || 0;
let factoryPrice = parseInt(localStorage.getItem("factoryPrice")) || 130000;
let nbrFactory = parseInt(localStorage.getItem("nbrFactory")) || 0;
let successFirstFactoryVar = Boolean(localStorage.getItem("successFirstFactoryVar")) || false;
let multiplicateurBank = parseFloat(localStorage.getItem("multiplicateurBank")) || 0;
let bankPrice = parseInt(localStorage.getItem("bankPrice")) || 1400000;
let nbrBank = parseInt(localStorage.getItem("nbrBank")) || 0;
let successFirstBankVar = Boolean(localStorage.getItem("successFirstBankVar")) || false;
let multiplicateurTemple = parseFloat(localStorage.getItem("multiplicateurTemple")) || 0;
let templePrice = parseInt(localStorage.getItem("templePrice")) || 20000000;
let nbrTemple = parseInt(localStorage.getItem("nbrTemple")) || 0;
let successFirstTempleVar = Boolean(localStorage.getItem("successFirstTempleVar")) || false;


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
    multiplicateurMine = parseFloat(localStorage.getItem("multiplicateurMine")) || 0;
    minePrice = parseInt(localStorage.getItem("minePrice")) || 12000;
    nbrMine = parseInt(localStorage.getItem("nbrMine")) || 0
    successFirstClickVar = Boolean(localStorage.getItem("successFirstClickVar")) || false;
    successTenClicksVar = Boolean(localStorage.getItem("successTentClickVar")) || false;
    successHundredClicksVar = Boolean(localStorage.getItem("successHundredtClickVar")) || false;
    successThousandClicksVar = Boolean(localStorage.getItem("successThousandClickVar")) || false;
    successFirstBuyVar = Boolean(localStorage.getItem("successFirstBuyVar")) || false;
    successFirstGrandmaVar = Boolean(localStorage.getItem("successFirstGrandmaVar")) || false;
    successFirstFarmVar = Boolean(localStorage.getItem("successFirstFarmVar")) || false;
    successTenAutoClickersVar = Boolean(localStorage.getItem("successTenAutoClickersVar")) ||false;
    successFirstMineVar = Boolean(localStorage.getItem("successFirstMineVar")) || false;
    multiplicateurFactory = parseFloat(localStorage.getItem("multiplicateurFactory")) || 0;
    factoryPrice = parseInt(localStorage.getItem("factoryPrice")) || 130000;
    nbrFactory = parseInt(localStorage.getItem("nbrFactory")) || 0;
    successFirstFactoryVar = Boolean(localStorage.getItem("successFirstFactoryVar")) || false;
    multiplicateurBank = parseFloat(localStorage.getItem("multiplicateurBank")) || 0;
    bankPrice = parseInt(localStorage.getItem("bankPrice")) || 1400000;
    nbrBank = parseInt(localStorage.getItem("nbrBank")) || 0;
    successFirstBankVar = Boolean(localStorage.getItem("successFirstBankVar")) || false;
    multiplicateurTemple = parseFloat(localStorage.getItem("multiplicateurTemple")) || 0;
    templePrice = parseInt(localStorage.getItem("templePrice")) || 20000000;
    nbrTemple = parseInt(localStorage.getItem("nbrTemple")) || 0;
    successFirstTempleVar = Boolean(localStorage.getItem("successFirstTempleVar")) || false;

    
    if (nbrAutoClicks > 0 || nbrGrandma > 0 || nbrFarm > 0 || nbrMine >0){
        startAutoClicking();
    }

    console.log("Jeu chargé ");
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
    localStorage.setItem("minePrice", minePrice);
    localStorage.setItem("multiplicateurMine", multiplicateurMine);
    localStorage.setItem("nbrMine", nbrMine);
    localStorage.setItem("successFirstClickVar", successFirstClickVar);
    localStorage.setItem("successTenClicksVar", successTenClicksVar);
    localStorage.setItem("successHundredClicksVar", successHundredClicksVar);
    localStorage.setItem("successThousandClicksVar", successThousandClicksVar);
    localStorage.setItem("successFirstBuyVar", successFirstBuyVar);
    localStorage.setItem("successFirstGrandmaVar", successFirstGrandmaVar);
    localStorage.setItem("successFirstFarmVar", successFirstFarmVar);
    localStorage.setItem("successTenAutoClickersVar", successTenAutoClickersVar);
    localStorage.setItem("successFirstMineVar", successFirstMineVar);
    localStorage.setItem("factoryPrice", factoryPrice);
    localStorage.setItem("multiplicateurFactory", multiplicateurFactory);
    localStorage.setItem("nbrFactory", nbrFactory);
    localStorage.setItem("successFirstFactoryVar", successFirstFactoryVar);
    localStorage.setItem("bankPrice", bankPrice);
    localStorage.setItem("multiplicateurBank", multiplicateurBank);
    localStorage.setItem("nbrBank", nbrBank);
    localStorage.setItem("successFirstBankVar", successFirstBankVar);
    localStorage.setItem("templePrice", templePrice);
    localStorage.setItem("multiplicateurTemple", multiplicateurTemple);
    localStorage.setItem("nbrTemple", nbrTemple);
    localStorage.setItem("successFirstTempleVar", successFirstTempleVar);
}

function formatNumber(nbr) {
    if (nbr >= 1_000_000_000_000_000) {
        return (nbr / 1_000_000_000_000_000).toFixed(1) + ' trillions';
    } else if (nbr >= 1_000_000_000_000) {
        return (nbr / 1_000_000_000_000).toFixed(1) + ' billions';
    } else if (nbr >= 1_000_000_000) {
        return (nbr / 1_000_000_000).toFixed(1) + ' milliards';
    } else if (nbr >= 1_000_000) {
        return (nbr / 1_000_000).toFixed(1) + ' millions';
    } else if (nbr >= 1_000) {
        return (nbr / 1_000).toFixed(1) + 'k';
    } else {
        return nbr;
    }
}

function clickPerSeconds(){
    let nbrClicksPerSecond = multiplicateurAutoClicks + multiplicateurFarm + multiplicateurGrandma + multiplicateurMine + multiplicateurFactory + multiplicateurBank + multiplicateurTemple;
    return formatNumber(nbrClicksPerSecond);
}

function updatesInfos() {
    let clicksZone = document.getElementById("count_clicks");
    clicksZone.textContent = formatNumber(nbrClicks) + ' Clicks';


    let clicksPerSeconds = document.getElementById("nber_clicks_per_second");
    clicksPerSeconds.textContent = String(clickPerSeconds())+ ' de Clicks/s';

    let buttonClickerAuto = document.getElementById("batClicker");
    buttonClickerAuto.textContent = 'Auto clicker: ' + formatNumber(clicksPrice) + ' Clicks';

    let buttonGrandma = document.getElementById("batGrandma");
    buttonGrandma.textContent = 'Grand-mère: ' + formatNumber(grandmaPrice) + ' Clicks';

    let buttonFarm = document.getElementById("batFarm");
    buttonFarm.textContent = 'Ferme: ' + formatNumber(farmPrice) + ' Clicks';

    let buttonMine = document.getElementById("batMine");
    buttonMine.textContent = 'Mine: ' + formatNumber(minePrice) + ' Clicks';

    let buttonFactory = document.getElementById("batFactory");
    buttonFactory.textContent = 'Factory: ' + formatNumber(factoryPrice) + ' Clicks';

    let buttonBank = document.getElementById("batBank");
    buttonBank.textContent = 'Bank: ' + formatNumber(bankPrice) + ' Clicks';
    
    let buttonTemple = document.getElementById("batTemple");
    buttonTemple.textContent = 'Temple: ' + formatNumber(templePrice) + ' Clicks';

    if (nbrAutoClicks > 0) showClickersBat();
    if (nbrGrandma > 0) showGrandmaBat();
    if (nbrFarm > 0) showFarmBat();
    if (nbrMine > 0) showMineBat();
    if (nbrFactory > 0) showFarmBat();
    if (nbrBank > 0) showBankBat();
    if (nbrTemple > 0) showTempleBat();


    successTenClicks();
    successHundredClicks();
    successThousandClicks();
    successFirstBuy();
    successFirstGrandma();
    successFirstFarm();
    successTenAutoClickers();
    successFirstMine();
    successFirstFactory();
    successFirstBank();
    successFirstTemple();
}

function autoClicker() {
    nbrClicks  += multiplicateurAutoClicks;
    nbrClicksTotal += multiplicateurAutoClicks;
    nbrClicks += multiplicateurGrandma;
    nbrClicksTotal += multiplicateurGrandma;
    nbrClicks += multiplicateurFarm;
    nbrClicksTotal += multiplicateurFarm;
    nbrClicks += multiplicateurMine;
    nbrClicksTotal += multiplicateurMine;
    nbrClicks += multiplicateurMine;
    nbrClicksTotal += multiplicateurMine;
    nbrClicks += multiplicateurBank;
    nbrClicksTotal += multiplicateurBank;
    nbrClicks += multiplicateurTemple;
    nbrClicksTotal += multiplicateurTemple;

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
        multiplicateurFarm += 8;
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


// Achat Mine
function buyMine() {
    if (nbrClicks >= minePrice) {
        nbrClicks -= minePrice;
        multiplicateurMine += 47;
        nbrMine += 1;
        minePrice = Math.round(minePrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Mine achetée !");
    } else {
        console.log("Pas assez de clics pour acheter une Mine.");
    }
}

function showMineBat() {
    let showMine = document.getElementById("showBatMine");
    showMine.textContent = '🗻 '.repeat(nbrMine);
}

function buyFactory() {
    if (nbrClicks >= factoryPrice) {
        nbrClicks -= factoryPrice;
        multiplicateurFactory += 260;
        nbrFactory += 1;
        factoryPrice = Math.round(factoryPrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Factory achetée !");
    } else {
        console.log("Pas assez de clics pour acheter une Factory.");
    }
}

function showFactoryBat() {
    let showFactory = document.getElementById("showBatFactory");
    showFactory.textContent = '🏭 '.repeat(nbrFactory);
}

// Achat Bank
function buyBank() {
    if (nbrClicks >= bankPrice) {
        nbrClicks -= bankPrice;
        multiplicateurBank += 1400;
        nbrBank += 1;
        bankPrice = Math.round(bankPrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Bank achetée !");
    } else {
        console.log("Pas assez de clics pour acheter une Bank.");
    }
}

function showBankBat() {
    let showBank = document.getElementById("showBatBank");
    showBank.textContent = '🏦 '.repeat(nbrBank);
}

// Achat Temple
function buyTemple() {
    if (nbrClicks >= templePrice) {
        nbrClicks -= templePrice;
        multiplicateurTemple += 7800;
        nbrTemple += 1;
        templePrice = Math.round(templePrice * 1.15);
        sauvegarderJeu();
        startAutoClicking();
        console.log("Temple acheté !");
    } else {
        console.log("Pas assez de clics pour acheter un Temple.");
    }
}

function showTempleBat() {
    let showTemple = document.getElementById("showBatTemple");
    showTemple.textContent = '⛩️ '.repeat(nbrTemple);
}

// functions for success




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

function successFirstMine(){
    if (nbrMine === 1 && successFirstMineVar === false){
        const title = 'Mine de rien';
        const description = 'Tu as acheté ta première mine. La production s’accélère !';
        popupSuccess(title, description);
        successFirstMineVar = true;
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

function successFirstFactory() {
    if (nbrFactory === 1 && successFirstFactoryVar === false) {
        const title = 'Usine à succès';
        const description = 'Tu as construit ta première factory. La production s’accélère !';
        popupSuccess(title, description);
        successFirstFactoryVar = true;
    }
}

function successFirstBank(){
    if (nbrBank === 1 && successFirstBankVar === false){
        const title = 'Première banque';
        const description = 'Tu as acheté ta première banque. La production s’accélère !';
        popupSuccess(title, description);
        successFirstBankVar = true;
    }
}
function successFirstTemple(){
    if (nbrTemple === 1 && successFirstTempleVar === false){
        const title = 'Premier temple';
        const description = 'Tu as acheté ton premier temple. La production s’accélère !';
        popupSuccess(title, description);
        successFirstTempleVar = true;
    }
}
