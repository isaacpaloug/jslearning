function recorrerPerIndex(cadena) {
  console.log("EXERCICI 3");
  for (let index = 0; index < cadena.length; index++) {
    console.log(cadena[index]);
  }
}

function recorrerPerValors(cadena) {
  console.log("EXERCICI 4");
  for (let index in cadena) {
    console.log(cadena[index]);
  }
}

function recorrerPerValors2(cadena) {
  console.log("EXERCICI 5");
  for (const valor of cadena) {
    console.log(valor);
  }
}
function recorrerPerValors3(cadena) {
  console.log("EXERCICI 6");
  cadena.forEach((element) => {
    console.log(element);
  });
}

function concatenaArrays(cadena1 = [], cadena2 = []) {
  console.log("EXERCICI 7");
  let cadenaConectada = cadena1.concat(cadena2);
  return cadenaConectada;
}

function fraseArray(cadena) {
  console.log("EXERCICI 8");
  let frase = cadena.join(" ");
  console.log(frase);
}
function arrayInvertit(cadena) {
  console.log("EXERCICI 9");
  let frase = cadena.reverse().join(" ");
  console.log(frase);
}
function sumarValorsArray(cadena) {
  let total = cadena.reduce((anterior, actual) => anterior + actual);
  return total;
}