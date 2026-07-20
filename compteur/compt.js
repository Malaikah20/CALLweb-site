let compteur = 0; 
//pour remetre la valeur du compteur a 0 
function décroissant() {
    compteur --;
    document.getElementById("result").innerText= compteur; 
    document.getElementById("result").style.color = "red"
}

// pour forcé la valeur de décroissant a 0 il faut faire avec la boucle for



function croissant() {
    compteur ++;
    document.getElementById("result").innerText= compteur; 
    document.getElementById("result").style.color = "green"

}

function restaurer() {
    compteur =0;
    document.getElementById("result").innerText= compteur; 
    document.getElementById("result").style.color = "black"
}
document.getElementById("décroissant").addEventListener("click", décroissant)
document.getElementById("croissant").addEventListener("click", croissant)
document.getElementById("restaurer").addEventListener("click", restaurer)