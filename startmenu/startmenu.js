// ? Funciones que sirven para la pagina de html startmenu
let palabras = [];
let keysavename = "palabra";
let keynumeropalabras = "numeropalabras";

function cargarpalabras(){
    palabras = [];
    var palabraslength = localStorage.getItem(keynumeropalabras);
    for(var index = 0;index < palabraslength; index++){
        palabras.push(localStorage.getItem(keysavename+(index+1)));
    }
    return palabras;
}

function iniciarJuego() {
    cargarpalabras();
    if(palabras.length>0){
        location.href = "nuevojuego.html";
    }else{
        alert("No hay palabras, tiene que asignar palabras");
    }
 }

function agregarpalabra(){
    location.href = "ingresopalabra.html";
}

function VerListaPalabras(){
    location.href = "listapalabras.html";
}