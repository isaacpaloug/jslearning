function marcar() {
  let chk = document.myform.check_list;
  if (document.getElementById("checkbox1").checked) {
    for (i = 0; i < chk.length; i++) chk[i].checked = false;
  }else{
    for (i = 0; i < chk.length; i++) chk[i].checked = true;
  }
}
function deshabilitar() {
  let nom = document.getElementById("nom");
  if (nom.disabled) {
    nom.disabled = false;
  } else {
    nom.disabled = true;
  }
}
function convertLectura() {
  let nom = document.getElementById("password");
  if (nom.readOnly) {
    nom.readOnly = false;
  } else {
    nom.readOnly = true;
  }
}
