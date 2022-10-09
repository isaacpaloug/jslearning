function exercici1(){
    var radi = prompt("Donem el radi de la circumferència");
    if (!isNaN(radi)) {
        var longitud = 2 * Math.PI * radi;
        console.log("El teu radi és: " + radi + " i la longitud és: " + longitud);
    }else{
        prompt("El que has introduit no es un numero")
    }
    
}

function exercici2() {
    var a = prompt("Introduieix un numero");
    var b = prompt("Introduieix un altre numero");

    if (a == b) {
        prompt("Els dos numeros son iguals");
    }else if(a < b){
        prompt("El major és " + b);
    }else{
        prompt("El major és " + a);
    }
}

function exercici3(){
    var a = prompt("Primer numero");
    var b = prompt("Segon numero");
    var c = prompt("Tercer numero");

    if(a==b){
        if(b==c)
            document.write('Els tres numeros son iguals');
        else if(b>c)
            document.write('Els dos primers son iguales y l\'ordre es: ',a,'=',b,'>',c);
        else
            document.write('Els dos primers son iguales y l\'ordre es: ',c,'>',a,'=',b);
    }
    else if(a==c){
        if(a>b)
            document.write('El primer y tercer son iguals y l\'ordre es: ',a,'=',c,'>',b);
        else
            document.write('El primer y tercer son iguals y l\'ordre es: ',b,'>',a,'=',c);
    }
    else if(b==c){
        if(b>a)
            document.write('El segon y tercer son iguals y l\'ordre es: ',b,'=',c,'>',a);
        else
            document.write('El primer y tercer son iguals y l\'ordre es: ',a,'>',b,'=',c);
    }
    else if((a>b)&&(b>c))
        document.write('El orden es: ',a,'>',b,'>',c);
    else if((a>c)&&(c>b))
        document.write('El orden es: ',a,'>',c,'>',b);
    else if((b>a)&&(a>c))
        document.write('El orden es: ',b,'>',a,'>',c);
    else if((b>c)&&(c>a))
        document.write('El orden es: ',b,'>',c,'>',a);
    else if((c>a)&&(a>b))
        document.write('El orden es: ',c,'>',a,'>',b);
    else if((c>b)&&(b>a))
        document.write('El orden es: ',c,'>',b,'>',a);
}
function exercici4(){
    var a = prompt("Numero 1");
    var b = prompt("Numero 2");

    if (a < b) {
        var inici = a;
        var fi = b;
    }else{
        var inici = b;
        var fi = a;
    }
    while (inici <= fi) {
        document.write(inici + " ");
        inici ++;
    }
}

function exercici5() {
    var a = prompt("Numero 1");
    var b = prompt("Numero 2");

    if (a < b) {
        var inici = a;
        var fi = b;
    }else{
        var inici = b;
        var fi = a;
    }
    for (var index = inici; index <= fi; index++) {
        document.write(index + " ")
    }
}

function exercici6() {
    var a = prompt("Numero 1");
    var b = prompt("Numero 2");

    if (a < b) {
        var inici = a;
        var fi = b;
    }else{
        var inici = b;
        var fi = a;
    }
    do {
        document.write(inici + " ")
        inici ++;
    } while (inici <= fi);
}

function exercici7a() {

    // ! VERSIO 1
    for ( i = 97; i <= 122; i++) {
        if (String.fromCharCode(i) == "a") {
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }else if(String.fromCharCode(i) == "e"){
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }else if(String.fromCharCode(i) == "i"){
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }else if(String.fromCharCode(i) == "o"){
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }
        else if(String.fromCharCode(i) == "u"){
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }else{
            document.write(String.fromCharCode(i) + " és consonant <br>")
        }
    }
}
function exercici7b() {

    // ! VERSIO 2
    for ( i = 97; i <= 122; i++) {
        if (String.fromCharCode(i) == "a" || String.fromCharCode(i) == "e" || String.fromCharCode(i) == "i" || String.fromCharCode(i) == "o" || String.fromCharCode(i) == "u") {
            document.write(String.fromCharCode(i) + " és vocal <br>");
        }else{
            document.write(String.fromCharCode(i) + " és consonant <br>")
        }
    }
}
function exercici7c() {

    // ! VERSIO 3
    for ( i = 97; i <= 122; i++) {
        switch (String.fromCharCode(i)) {
            case "a":
                document.write(String.fromCharCode(i) + " és vocal <br>");
                break;
            case "e":
                document.write(String.fromCharCode(i) + " és vocal <br>");
                break;
            case "i":
                document.write(String.fromCharCode(i) + " és vocal <br>");
                break;
            case "o":
                document.write(String.fromCharCode(i) + " és vocal <br>");
                break;
            case "u":
                document.write(String.fromCharCode(i) + " és vocal <br>");
                break;
            default:
                document.write(String.fromCharCode(i) + " és consonant <br>");
                break;
        }
    }
}

function factorialRecursiva (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursiva (n-1); 
}

function factorialIterativa (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}