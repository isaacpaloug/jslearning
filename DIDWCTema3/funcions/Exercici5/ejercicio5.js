"use strict";

//Crea una funció amb quatre paràmetres. Dins el cos de la funció utilitza l'objecte arguments i les propietats de la funció per a mostrar tota la informació possible.
function funcio(a, b, c, d) {
    let text = "La funció té " + arguments.length + " paràmetres. Els paràmetres són: ";
    for (let i = 0; i < arguments.length; i++) {
        text += arguments[i] + ", ";
    }
    text += "i el nom de la funció és " + funcio.name;
    return text;
}
document.getElementById('exercici5').innerHTML = funcio(1, 2, 3, 4);