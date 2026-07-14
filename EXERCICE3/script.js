function EXCHANGER() {
    let devise = prompt("quelle est ta devise");
    let montant = Number(prompt("entrer le montant en franc"));
    let taux = Number(prompt("quelle est le taux"));
    let result = montant / taux ;

  

    document.getElementById("result") .innerHTML = `
    montant : ${montant}
    <br>
    taux : ${taux}
    <br>
    result : ${result}

    `;
}