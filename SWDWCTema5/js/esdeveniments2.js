import * as Validacions from "./validacions.js";
window.onload = function () {
    // ! Posam un valor per defecte al nom i llinatges
    document.getElementById("nom").focus();
    document.getElementById("nom").value = "Isaac";
    document.getElementById("llinatges").value = "Palou Gijon";
    // ! DEMANAR CONFIRMACIÓ DE SI VOLS O NO FER EL RESET
    let formulari = document.getElementById("formulari");
    function confirmacio() {
        return confirm("Segur que vols netejar el formulari?");
    }
    formulari.addEventListener("reset", function (event) {
        if (!confirmacio()) {
            event.preventDefault();
        }
    });
    // ! FUNCIO PER VALIDAR EL FORMULARI EMPLEANT MODULS
    function validar() {
        let missatge = document.getElementById("missatge");
        let errorMsg  = "";
        let nom = document.getElementById("nom").value;
        let llinatges = document.getElementById("llinatges").value;
        let telefon1 = document.getElementById("tlf1").value;
        let telefon2 = document.getElementById("tlf2").value;
        let data = document.getElementById("dataNaixament").value;

        // ? validar NOM
        if (!Validacions.validarObligatori(nom)) {
            document.getElementById("nom").style = "border: 2px solid red";
            errorMsg += "El camp nom és obligatori.<br>";
        };
        if (!Validacions.validarObligatori(llinatges)) {
            document.getElementById("llinatges").style = "border: 2px solid red";
            errorMsg += "El camp llinatges és obligatori.<br>";
        }
        if (!Validacions.validarTelefon(telefon1)) {
            document.getElementById("tlf1").style = "border: 2px solid red";
            errorMsg += "El telefon1 ha de ser valid<br>";
        }
        if (!Validacions.validarTelefon(telefon2)) {
            document.getElementById("tlf2").style = "border: 2px solid red";
            errorMsg += "El telefon2 ha de ser valid<br>";
        }
        if (!Validacions.validarData(data)) {
            document.getElementById("dataNaixament").style = "border: 2px solid red";
            errorMsg += "Introdueix una data vàlida";
        }
        
        // ! SI EL MISSATGE D'ERROR ESTA BUIT POSA UN MISSATGE DE VALIDAT, SINO POSA ELS ERRORS QUE CONTE EL FORMULARI
        if (errorMsg === "") {
            missatge.innerHTML = "Formulari validat.";
            document.getElementsByClassName("controls").style = "border: 1px solid #1f53c5;";
            return false;
        }
        else{
            missatge.innerHTML = errorMsg;
            return false;
        }
    }
    formulari.addEventListener("submit", function (esdeveniment) {
        if(!validar()){
            esdeveniment.preventDefault();
        }
    });
};

