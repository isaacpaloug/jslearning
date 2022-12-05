'use strict';

function afegir() {
    //? Agafar el valor del camp de text
    const nou = document.getElementById("nou").value;
    //? Crear un <li></li>
    const nouLi = document.createElement("li");
    //?
    const boto = document.createElement("button");
    boto.appendChild(document.createTextNode("Esborra"));
    const text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);
    nouLi.appendChild(boto);
    const llista = document.getElementById("llista");

    boto.addEventListener("click", function (esdeveniment) {
        const objecte=esdeveniment.target;
        const liObjecte = objecte.parentNode;
        const ulObjecte = liObjecte.parentNode;
        ulObjecte.removeChild(liObjecte);
    });


    llista.appendChild(nouLi);
}

window.onload = function () {
    let formulari = document.getElementById("formulari");
    document.getElementById("boto").onclick = afegir;
    formulari.addEventListener("submit", function(event){
        event.preventDefault();
    })
}
