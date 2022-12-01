//Crea una pàgina amb un botó i un div. Assigna-li 3 funcions diferents a
// l'esdeveniment onclick del botó, cada una ha d'afegir un text diferent
// al div. Comprova que en pitjar el botó s'executen tots tres i en l'ordre correcte
function primera() {
    let resultat = document.getElementById("resultat");
    resultat.innerHTML += "<p>primer paràgraf</p>";
}

function segona() {
    let resultat = document.getElementById("resultat");
    resultat.innerHTML += "<p>segon paràgraf</p>";
}

function tercera() {
    let resultat = document.getElementById("resultat");
    resultat.innerHTML += "<p>tercer paràgraf</p>";
}

window.onload = function () {
    let boto = document.getElementById("boto");
    boto.addEventListener("click", primera);
    boto.addEventListener("click", segona);
    boto.addEventListener("click", tercera);
}

