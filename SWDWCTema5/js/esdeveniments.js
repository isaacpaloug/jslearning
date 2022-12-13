"use strict";
var contador = 0;
function afegeix(nomEsdeveniment) {
    let div = document.getElementById("div");
    div.innerHTML = nomEsdeveniment + " " + contador + " | " + div.innerHTML;
    contador++;
}

// ! ESDEVENIMENTS DE PARAGRAF
let paragraf = document.getElementById("paragraf");

paragraf.addEventListener("mousedown", function () {
    afegeix("paragraf: mousedown ");
});

paragraf.addEventListener("mouseenter", function () {
    afegeix("paragraf: mouseenter ")
});

paragraf.addEventListener("mouseout", function () {
    afegeix("paragraf: mouseout ")
});

paragraf.addEventListener("mouseleave", function () {
    afegeix("paragraf: mouseleave ")
});

paragraf.addEventListener("mousemove", function () {
    afegeix("paragraf: mousemove ")
});
paragraf.addEventListener("dblclick", function () {
    afegeix("paragraf: dblclick ")
});
// ! ESDEVENIMENTS DE FORM

// ? INPUT TEXT
let text = document.getElementById("input_text");

text.addEventListener("focus", function () {
    afegeix("input: onfocus")
});

text.addEventListener("focus", function () {
    afegeix("input: onfocus")
});

text.addEventListener("blur", function () {
    afegeix("input: onblur")
});
text.addEventListener("focusout", function () {
    afegeix("input: onfocusout")
});
text.addEventListener("change", function () {
    afegeix("input: onchange")
});
text.addEventListener("input", function () {
    afegeix("input: oninput")
});
text.addEventListener("select", function () {
    afegeix("input: onselect")
})
// ? SUBMIT

let formulari = document.getElementById("form");

formulari.addEventListener("submit", function (event) {
    event.preventDefault();
})
formulari.addEventListener("submit", function () {
    afegeix("submit: onsubmit")
})
// ? RESET

formulari.addEventListener("reset", function () {
    afegeix("reset: onreset");
});
window.onload = function () {
    afegeix("window: onload")
}
window.onbeforeunload = function () {
    afegeix("window: onbeforeunload")
}