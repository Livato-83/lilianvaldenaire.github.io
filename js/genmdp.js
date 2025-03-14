function recupDonee(id){
    let a = document.getElementById(id).value;
    return a; 
};


function CalcForceMdp ( nbrCarac, majs, minus, numbers, caracSpe, mdps){
    let tabResult = [nbrCarac, majs, minus, numbers, caracSpe];
    let force = 0;

    for (pas=0; pas < 5; pas++){
        if (tabResult[pas] >=8){
            if(tabResult[pas] >= 12){
                force += 2;
            }
            else{
                force += 1;
            }
        }
        else if (tabResult[pas] === true){
            force +=1
        }
    };
    return force;
};

// async function isCompromisedMdp(mdp) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(mdp);
//     const hashBuffer = await crypto.subtle.digest("SHA-1", data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
//     const prefix = hashHex.substring(0, 5);
//     const suffix = hashHex.substring(5);
//     const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
//     const text = await response.text();
//     const found = text.split("\n").find(line => line.startsWith(suffix));
//     return found ? true : false;
// }


async function GenMdp(){
    let nbrCarac = parseInt(document.getElementById("carac").value);

    let majs = document.getElementById("majs").checked;
    let minus = document.getElementById("minus").checked;
    let numbers = document.getElementById("numbers").checked;
    let caracSpe = document.getElementById("caracSpe").checked;

    let motDePasse = "";
    let chiffres = "0123456789";                     
    let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
    let minuscules = "abcdefghijklmnopqrstuvwxyz"; 
    let speciaux = "!@#$%^&*()-_=+[]{};:,.<>?/";

    // Création du pool
    let pool = "";
    if (majs) pool += majuscules;
    if (minus) pool += minuscules;
    if (numbers) pool += chiffres;
    if (caracSpe) pool += speciaux;

    if (pool.length === 0) {
        alert("Veuillez cocher au moins une option !");
    } else {
        for (let i = 0; i < nbrCarac; i++) {
            let currentPool = pool;
            if (i === 0 && numbers) currentPool = currentPool.replace(/[0-9]/g, '');
            if (currentPool.length === 0) currentPool = pool;
            motDePasse += currentPool[Math.floor(Math.random() * currentPool.length)];
        }
        let force = CalcForceMdp(nbrCarac, majs, minus, numbers, caracSpe, motDePasse);
        let board = document.getElementById("board");
        let container = document.createElement("div");
        container.classList.add("generated-password");
        let span = document.createElement("span");
        span.textContent = motDePasse;
        let button = document.createElement("button");
        button.classList.add("copy-btn");
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#444">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
            </svg>
        `;
        button.onclick = function () {
            navigator.clipboard.writeText(motDePasse);
            let originalHTML = button.innerHTML;
            button.innerHTML = `<span style="font-size:12px;">✔</span>`;
            setTimeout(() => {
                button.innerHTML = originalHTML;
            }, 1500);
        };

        let textForce =''
        if (force <= 2) textForce = 'Ce mot de passe est très faible.'; 
        else if (force <= 4) textForce = 'Ce mot de passe est moyen.';
        else textForce = 'Ce mot de passe est correct.';


        let pForce = document.createElement("p");
        pForce.classList.add("pForce");
        pForce.textContent = textForce;
        let strengthBar = document.createElement("div");
        strengthBar.classList.add("strength-bar");
        strengthBar.style.height = "8px";
        strengthBar.style.width = "100%";
        strengthBar.style.marginTop = "2px";
        strengthBar.style.borderRadius = "4px";
        strengthBar.style.marginBottom = "15px";


        let color = "#ccc";
        if (force <= 2) color = "red";
        else if (force <= 4) color = "orange";
        else color = "green";

        strengthBar.style.background = color;
        
        


        container.appendChild(span);
        container.appendChild(button);
        board.appendChild(container);
        board.appendChild(pForce);
        board.appendChild(strengthBar);
    };

};

}
