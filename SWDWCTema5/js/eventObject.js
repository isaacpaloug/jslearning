/*Programa una funció que rebi com a paràmetre un esdeveniment i que mostri totes les
 propietats (nom i valor) d'aquest objecte. Assigna aquesta funció als esdeveniments
 onclick del botó i onkeypress de la capsa de text.*/
 function mostraObjecte(event) {
    let resultat = document.getElementById("resultat");
    for (let propietat in event) {
        resultat.innerHTML += "<p>NOM: " + propietat + " VALOR: " + event[propietat] + "</p>";

    }

}

window.onload = function () {
    let capsa = document.getElementById("capsa");
    let boto = document.getElementById("boto");
    boto.addEventListener("click",function(boto){
        mostraObjecte(boto);
    })
    capsa.addEventListener("keypress", function(e){
        mostraObjecte(e);
    })
}

