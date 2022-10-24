"use strict";
window.onload = function () {
    for (let i = 0; i < 10; i++) {
        //utilitza arrow functions per assignar el codi als esdeveniments.
        document.getElementById("boton" + i).onclick = () => alert(i);
    }
}