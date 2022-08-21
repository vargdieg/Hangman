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

function guardarpalabras(){
    eliminarpalabras();
    for(var index = 0;index < palabras.length; index++){
        localStorage.setItem(keysavename+(index+1),palabras[index]);
    }
    localStorage.setItem(keynumeropalabras,palabras.length);
}

function eliminarpalabras(){
    for(var index = 0;index < palabras.length; index++){
        localStorage.removeItem(keysavename+(index+1));
    }
    localStorage.removeItem(keynumeropalabras);
}

// ? Funciones que sirven para la pagina de html ingresopalabras.html

function menuinicial(){
    location.href = "startmenu.html";
}

function guardaryComenzar(){
    guardarpalabra();
    cargarpalabras();
    if(palabras.length > 0){
        iniciarJuego();
    }else{
        alert("No hay palabras para jugar");
    }
}

function iniciarJuego(){
    location.href = "nuevojuego.html";
}

function guardarpalabra(){
    //1. Se tiene que guardar la palabra
    var palabra = document.getElementById("ingresar-palabra");
    //2. La palabra tiene que ser valida
    [validar,mensaje]=ValidarPalabra(palabra.value);
    if(validar){
        //3. La palabra se guarda
        palabras.push(palabra.value);
        guardarpalabras();
        document.getElementById("ingresar-palabra").value = "";
    }else{
        alert(mensaje);
        document.getElementById("ingresar-palabra").value = "";
    }    
}

function ValidarPalabra(palabra){
    palabras = cargarpalabras();

    if(palabra.length>8 || palabra.length<1){
        var mensaje = "La longitud de la palabra tiene que ser entre 1 y 8 caracteres";
        return [false, mensaje];
    }
    if(containsSpecialChars(palabra)){
        var mensaje = "La palabra contiene caracteres especiales";
        return [false, mensaje];
    }
    for(var index = 0;index<palabra.length;index++){
        if(palabra[index] =="Á" || palabra[index] =="É" || palabra[index] =="Í"
        || palabra[index] =="Ó" || palabra[index] =="Ú"){
            var mensaje = "La palabra contiene acentos";
            return [false, mensaje];
        }
        if(palabra[index] ==" "){
            var mensaje = "La palabra contiene espacios";
            return [false, mensaje];
        }
    }
    if(palabra.toUpperCase() != palabra){
        var mensaje = "Solo se aceptan mayusculas";
        return [false, mensaje];
    }
    for(var index = 0;index<palabras.length;index++){
        if(palabra == palabras[index]){
            var mensaje = "La palabra ya existe en el diccionario";
            return [false, mensaje];        
        }
    }
    var mensaje = "";
    return [true, mensaje];;
}

function containsSpecialChars(str) {
    const specialChars = /[´`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function eliminar(){
    var palabra = document.getElementById("ingresar-palabra");
    var nuevasPalabras = [];
    var eliminada = false;
    palabras = cargarpalabras();
    for (var index = 0;index<palabras.length;index++){
        if(palabras[index] != palabra.value){
            nuevasPalabras.push(palabras[index]);
        }else{
            eliminada = true;
        }
    }
    console.log("Arreglo sin eliminar");
    console.log(nuevasPalabras);
    if(eliminada){
        eliminarpalabras();
        palabras = nuevasPalabras;
        guardarpalabras();
        alert("Palabra "+palabra.value+" eliminada");
    }else{
        alert("Palabra "+palabra.value+" no encontrada");
    }
 }