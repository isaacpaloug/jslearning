function exercici1(){
    var radi = prompt("Donem el radi de la circumferència");
    if (!isNaN(radi)) {
        var longitud = 2 * Math.PI * radi;
        console.log("El teu radi és: " + radi + " i la longitud és: " + longitud);
    }else{
        prompt("El que has introduit no es un numero")
    }
    
}go