let multiplicateurMine = parseFloat(localStorage.getItem("multiplicateurMine")) || 0;
let minePrice = parseInt(localStorage.getItem("minePrice")) || 12000;
let nbrMine = parseInt(localStorage.getItem("nbrMine")) || 0
let successFirstMineVar = Boolean(localStorage.getItem("successFirstMineVar")) || false;



multiplicateurMine = parseFloat(localStorage.getItem("multiplicateurMine")) || 0;
minePrice = parseInt(localStorage.getItem("minePrice")) || 12000;
nbrMine = parseInt(localStorage.getItem("nbrMine")) || 0
successFirstMineVar = Boolean(localStorage.getItem("successFirstMineVar")) || false;

localStorage.setItem("minePrice", minePrice);
localStorage.setItem("multiplicateurMine", multiplicateurMine);
localStorage.setItem("nbrMine", nbrMine);
localStorage.setItem("successFirstMineVar", successFirstMineVar);

let buttonMine = document.getElementById("batMine");
buttonMine.textContent = 'Mine: ' + minePrice + ' Clicks';

if (nbrMine > 0) showMineBat();

nbrClicks += multiplicateurMine;
nbrClicksTotal += multiplicateurMine;

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


function successFirstMine(){
    if (nbrMine === 1 && successFirstMineVar === false){
        const title = 'Mine de rien';
        const description = 'Tu as acheté ta première mine. La production s’accélère !';
        popupSuccess(title, description);
        successFirstMineVar = true;
    }
}