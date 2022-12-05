'use strict';

function elimina(e) {
    const objecte = e.target;
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);

}

function canviaLlista(e) {
    const objecte = e.target;
    const liObjecte = objecte.parentNode;
    const ulObjecte = liObjecte.parentNode;
    //ulObjecte.removeChild(liObjecte);
    let novaUl;
    if (ulObjecte === document.getElementById("llistaDemanats")) {
        novaUl = document.getElementById("llistaComplits");
    } else {
        novaUl = document.getElementById("llistaDemanats");
    }
    novaUl.appendChild(liObjecte);
}


function afegir() {
    const nou = document.getElementById("nou").value;
    const nouLi = document.createElement("li");
    const text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);

    //Crear boto Esborra
    const bEsborra = document.createElement("button");
    bEsborra.setAttribute("type", "button");
    bEsborra.appendChild(document.createTextNode("Borrar"));
    nouLi.appendChild(bEsborra);
    bEsborra.addEventListener("click",elimina)

    //Crear boto Canvia
    const bCanvia = document.createElement("button");
    bCanvia.setAttribute("type", "button");
    bCanvia.appendChild(document.createTextNode("Canviar"));
    nouLi.appendChild(bCanvia);
    bCanvia.addEventListener("click", function (esdeveniment) {
        const objecte = esdeveniment.target;
        const liObjecte = objecte.parentNode;
        const ulObjecte = nouLi.parentNode;
        let novaUl;
        if (ulObjecte === document.getElementById("llistaDemanats")) {
            novaUl = document.getElementById("llistaComplits");
        } else {
            novaUl = document.getElementById("llistaDemanats");
        }
        novaUl.appendChild(liObjecte);
    });

    document.getElementById("llistaDemanats").appendChild(nouLi);
}


window.onload = function () {
    let formulari = document.getElementById("formulari");
    document.getElementById("boto").onclick = afegir;
    formulari.addEventListener("submit", function(event){
        event.preventDefault();
    })
}
