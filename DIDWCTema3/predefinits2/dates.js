function esFinde(data) {
    dia = data.getDay()
    if (dia == 6 || dia == 0) {
        return("És cap de setmana");
    }
    return("No és cap de setmana");
}

function eliminaDuplicats(cadena){
    let conjunt = new Set();
    let cadenaForaDuplicats = new Array();
    for (const value of cadena) {
        conjunt.add(value);
    }
    for (const iterator of conjunt) {
        cadenaForaDuplicats.push(iterator)
    }
    return cadenaForaDuplicats;
}