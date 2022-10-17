import  * as Validacions  from "./modules/utilitats.js";
window.onload=function(){
    const nif1 = "78219594K";
    let resultat1 = Validacions.validarNif(nif1);
    console.log("NIF 1: " + nif1);
    console.log("Resultat 1: " + resultat1);
    const nif2 = "78219594l";
    let resultat2 = Validacions.validarNif(nif2);
    console.log("NIF 1: " + nif2);
    console.log("Resultat 1: " + resultat2);
    const tlf = "601319494";
    let resultattlf = Validacions.validarTelefon(tlf);
    console.log("TLF: " + tlf);
    console.log("Resultat: " + resultattlf);
}