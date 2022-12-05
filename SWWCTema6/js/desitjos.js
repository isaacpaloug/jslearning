'use strict';

function afegir() {
    const nou = document.getElementById("nou").value;
    const nouLi = document.createElement("li");
    const text = document.createTextNode(nou);
    nouLi.appendChild(text);
    const llista = document.getElementById("llista");
    llista.appendChild(nouLi);
}

window.onload = function () {
    let formulari = document.getElementById("formulari");
    document.getElementById("boto").onclick = afegir;
    formulari.addEventListener("submit", function(event){
        event.preventDefault();
    })
}
