'use strict';
// ! Funció per esborrar l'element de la llista
function esborrar(e) {
    const objecte = e.target;
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);
}

function canviaLlista(e) {
    const objecte = e.target;
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    let novaUl;
    if (ulObjecte === document.getElementById("llistaDemanats")) {
        novaUl = document.getElementById("llistaComplits");
    } else {
        novaUl = document.getElementById("llistaDemanats");
    }
    novaUl.appendChild(liObjecte);
}

// ! Funció per afegir un element a la llista.
function afegir() {
    // * @param nou -> Sirà el valor del nou element de la llista
    // * @param nouLi -> Crea un element del tipus <li></li>
    // * @param text -> Crea el text sencer que dura dins l'element li
    const nou = document.getElementById("nou").value;
    const nouLi = document.createElement("li");
    const text = document.createTextNode(nou + " ");
    // * Ficar el text dins l'element li
    nouLi.appendChild(text);

    // ? Crear boto Esborra
    const bEsborra = document.createElement("button");
    bEsborra.setAttribute("type", "button");
    bEsborra.appendChild(document.createTextNode("Borrar"));
    nouLi.appendChild(bEsborra);
    bEsborra.addEventListener("click",esborrar)

    // ?Crear boto Canvia
    const bCanvia = document.createElement("button");
    bCanvia.setAttribute("type", "button");
    bCanvia.appendChild(document.createTextNode("Canviar"));
    nouLi.appendChild(bCanvia);
    bCanvia.addEventListener("click", canviaLlista);

    document.getElementById("llistaDemanats").appendChild(nouLi);
}


window.onload = function () {
    let formulari = document.getElementById("formulari");
    document.getElementById("boto").onclick = afegir;
    formulari.addEventListener("submit", function(event){
        event.preventDefault();
    })
}
