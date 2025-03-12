function recupDonee(id){
    let a = document.getElementById(id).value;
    return a; 
}




function GenMdp(){
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

        container.appendChild(span);
        container.appendChild(button);
        board.appendChild(container);
    }

}
