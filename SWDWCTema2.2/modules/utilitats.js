"use strict";

function sumaNumero(a, b) {
  return parseInt(a) + parseInt(b);
}
function restaNumero(a, b) {
  return a - b;
}
function multiplicacioNumero(a, b) {
  return a * b;
}
function divisioNumero(a, b) {
  return a / b;
}
export default function elevarNumero(base, exponent) {
  return base ** exponent;
}
function esEnter(numero) {
  if (isNaN(numero)) {
    return false;
  } else {
    if (numero % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
function esDecimal(numero) {
  if (isNaN(numero)) {
    return "El que has introduit no es un numero";
  } else {
    if (numero % 1 != 0) {
      return true;
    } else {
      return false;
    }
  }
}
function llegirEnters() {
  var num;
  do {
    num = prompt("Introdueix un numero enter");
  } while (num % 1 != 0);
}
export function validarTelefon(telefon) {
  var tlf = telefon.replace(/\s/g, "").length;
  if (tlf == 9) {
    if (telefon.charAt(0) == "6" || telefon.charAt(0) == "7") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
export function validarData(data) {
  var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  if (data.match(reg)) {
    return true;
  } else {
    return false;
  }
}

export function validarNif(dni) {
  var lletres = "TRWAGMYFPDXBNJZSQVHLCKET";
  if (dni.length == 9) {
    var lletradni = dni[8].toUpperCase();
    var numero = dni.substr(0, dni.length - 1);
    if (esEnter(numero)) {
      var posicio = numero % 23;
      return lletres[posicio] == lletradni;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function validarOligatori(arg) {
  if (arg === null || arg === "" || arg.trim() === "") {
    return false;
  } else {
    return true;
  }
};