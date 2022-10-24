function esFinde(data) {
    dia = data.getDay()
    if (dia == 6 || dia == 0) {
        return("És cap de setmana");
    }
    return("No és cap de setmana");
}