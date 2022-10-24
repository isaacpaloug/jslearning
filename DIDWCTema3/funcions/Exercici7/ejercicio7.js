"use strict";
//Crea una funció anomenada mostraDades amb un paràmetre. En executar-se ha de mostrar aquest paràmetre dins d'un alert. Assigna aquesta funció a l'esdeveniment onclick d'un botó dins del windows.onload
function mostraDades(dades) {
    alert("aqui no hi son les dades que serques");
}
window.onload = function () {
    document.getElementById('exercici7').onclick = mostraDades;
}