function marcar() {
  alert("hola");
}
function deshabilitar() {
    let nom = document.getElementById("nom");
    if (nom.disabled) {
        nom.disabled = false;
    }else{
        nom.disabled = true;
    }
}
function convertLectura() {
    let nom = document.getElementById("password");
    if(nom.readOnly){
        nom.readOnly = false;
    }else{
        nom.readOnly = true;
    }

}