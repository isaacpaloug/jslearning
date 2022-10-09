function sumanumero(a, b) {
    return parseInt(a) + parseInt(b);
}
function restanumero(a, b){
    return a - b;
}
function multiplicacionumero(a, b){
    return a * b;
}
function divisionumero(a, b) {
    return a / b;
}
function esEnter(numero){
    if (isNaN(numero)){
        return ("El que has introduit no es un numero");
    } else {
        if (numero % 1 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
function esDecimal(numero){
    if (isNaN(numero)){
        return ("El que has introduit no es un numero");
    } else {
        if (numero % 1 != 0) {
            return true;
        } else {
            return false;
        }
    }
}
function llegirEnters(){
    var num;
    do {
        num = prompt("Introdueix un numero enter");
    } while (num % 1 != 0);
}
function validarTelefon(telefon) {
    tlf = telefon.replace( /\s/g, '' ).length;
    if (tlf == 9) {
        if (telefon.charAt(0) == "6" || telefon.charAt(0) == "7") {
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
// function validarData(data) {
//     let pattern = "^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/";
//     return pattern.test(data)
// }

