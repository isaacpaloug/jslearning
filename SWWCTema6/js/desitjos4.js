'use strict';

function afegir() {
    const nou = document.getElementById("nou").value;
    const nouLi = document.createElement("li");
    let text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);
    //Crear link esborra
    const esborra = document.createElement("a");
    text = document.createElement("img");
    text.setAttribute("src", "imatges/delete.gif");
    text.setAttribute("title", "Esborra");

    esborra.appendChild(text);
    esborra.setAttribute("href", "#");
    esborra.setAttribute("onclick", "elimina(this)");
    nouLi.appendChild(esborra);

    text = document.createTextNode(" ");
    nouLi.appendChild(text);

    //Crear link canviar
    const canvia = document.createElement("a");
    text = document.createElement("img");
    text.setAttribute("src", "imatges/next-icon.png");
    text.setAttribute("title", "Canvia");
    canvia.appendChild(text);
    canvia.setAttribute("href", "#");
    canvia.setAttribute("onclick", "canvia(this)");
    nouLi.appendChild(canvia);

    const l = document.getElementById("llista");
    l.appendChild(nouLi);
}

function elimina(objecte) {
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);

}

function canvia(objecte) {
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    //ulObjecte.removeChild(liObjecte);
    let novaUl;
    const im = objecte.firstChild;
    if (ulObjecte == document.getElementById("llista")) {
        novaUl = document.getElementById("llistaC");
        im.setAttribute("src", "imatges/back-icon.png");
    } else {
        novaUl = document.getElementById("llista");
        im.setAttribute("src", "imatges/next-icon.png");
    }
    novaUl.appendChild(liObjecte);
}

window.onload = function () {
    document.getElementById("boto").onclick = afegir;
    document.forms[0].onsubmit = function (e) {
        e.preventDefault();
    }
};
