"use strict";

/*Crea una pàgina amb dos botons amb la següent funcionalitat definida dins l'onload:

El primer botó demanarà una paraula a l'usuari amb un prompt.

El segon botó mostrarà la paraula introduïda per l'usuari dins un paràgraf de la pàgina

No podeu utilitzar variables globals.*/

window.onload = function () {
    let paraula = "";
    let boto1 = document.getElementById("pedir");
    let boto2 = document.getElementById("enseñar");
    boto1.onclick = function () {
        paraula = prompt("Introdueix una paraula");
    }
    boto2.onclick = function () {
        document.getElementById("paragraf").innerHTML = paraula;
    }
}
