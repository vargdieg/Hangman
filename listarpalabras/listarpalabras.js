let palabras = [];
let keysavename = "palabra";
let keynumeropalabras = "numeropalabras";

cargarpalabras();

function cargarpalabras(){
    palabras = [];
    var palabraslength = localStorage.getItem(keynumeropalabras);
    for(var index = 0;index < palabraslength; index++){
        palabras.push(localStorage.getItem(keysavename+(index+1)));
    }
    return palabras;
}

function menuinicial(){
    location.href = "startmenu.html";
}