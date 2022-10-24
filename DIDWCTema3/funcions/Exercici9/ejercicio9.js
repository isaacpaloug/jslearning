"use strict";

//Crea una funció amb una funció interna
function mostraInterna() {
    function mostra2() {
        alert("Hola esto es una funcion interna");
    }
    mostra2();
}
window.onload = function () {
    document.getElementById('exercici9').onclick = mostraInterna;
}