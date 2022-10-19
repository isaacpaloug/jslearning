'use strict'
function calcular1() {
    let radi = document.getElementById("radi").value;
    let longitud = 2 * Math.PI * radi;
    document.write("Longitud: " + longitud)
}
function calcular2() {
    let radi = document.getElementById("radi").value;
    let longitud = 2 * Math.PI * radi;
    var paragraf = document.getElementById("longitud");
    paragraf.innerHTML = longitud;
}