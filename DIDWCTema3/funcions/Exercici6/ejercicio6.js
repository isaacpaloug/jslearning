"use strict";
////Crea una funció anomenada mostra que en executar-se mostri un alert. Assigna aquesta funció a l'esdeveniment onclick d'un botó dins el windows onload.
 function mostra(){
 alert("Mostra 6 bla bla bla texto");
 window.onload = function(){
    document.getElementById("exercici6").onclick = mostra;
 }
 }
