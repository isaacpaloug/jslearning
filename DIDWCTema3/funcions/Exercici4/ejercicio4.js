"use strict";
//Crea una funció calcula que rebi tres paràmetres, els dos primers seran números i el tercer una funció. Dins el cos de la funció s'executarà la funció passada com a paràmetre amb les altres dades. Prova si funciona.
import * as c from "../../js/utilitats.js";
import {suma} from "../../js/utilitats.js";

function calcula(a, b, c) {
    return c(a, b);
}
document.getElementById('exercici4').innerHTML = "La funcion calcula con 9 y 7 y la funcion suma saca: " + calcula(9, 7,suma);