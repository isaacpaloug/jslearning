import { validarNif } from "./modules/utilitats.js";

window.onload=function(){
    const nif1 = "78219594K";
    let resultat1 = validarNif(nif1);
    const nif2 = "78219594L";
    let resultat2 = validarNif(nif2);
    console.log("NIF: " + nif1);
    console.log("resultat: "+ resultat1);
    console.log("NIF: " + nif2);
    console.log("resultat: "+ resultat2);
}