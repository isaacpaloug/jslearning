"use strict";

//Crea una funció anònima assignada a una variable que rebi com a mínim dos paràmetres i comprova que funciona.
let anonima = function (a,b){
    return a-b;
}
document.getElementById('exercici3').innerHTML ="La funcion anonima con 9 y 7  saca: "+ anonima(9,7);