window.onload = function () {
    document.getElementById("nom").focus();
    document.getElementById("nom").value = "Isaac";
    document.getElementById("llinatges").value = "Palou Gijon";

    let formulari = document.getElementById("formulari");
    function confirmacio() {
        return confirm("Segur que vols netejar el formulari?");
    }
    formulari.addEventListener("reset", function (event) {
        if(!confirmacio()) {
            event.preventDefault();
        }
    });
};

