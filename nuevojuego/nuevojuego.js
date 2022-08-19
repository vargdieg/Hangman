let palabras = [];
let keysavename = "palabra";
let keynumeropalabras = "numeropalabras";
let letraspalabra = [];
let letrasusadas = [];
let letrasusadascorrectas = [];
let intentos = 0;
let letrasrestantes = 0;

let espacios = ["primer-espacio","segundo-espacio","tercer-espacio","cuarto-espacio","quinto-espacio",
"sexto-espacio","septimo-espacio","octavo-espacio"];

let letras = ["primera-letra","segunda-letra","tercera-letra","cuarta-letra","quinta-letra",
"sexta-letra","septima-letra","octava-letra"];

let ahorcado = ["plataforma-base","plataforma-vertical","plataforma-superior","plataforma-soga",
"ahorcado-cabeza","ahorcado-cuerpo","ahorcado-pierna-derecha","ahorcado-pierna-izquierda",
"ahorcado-brazo-izquierdo","ahorcado-brazo-derecho"];


cargarpalabras();
var randomnumber = Math.floor(Math.random()*palabras.length)
var palabraahorcado = palabras[randomnumber];

document.addEventListener("DOMContentLoaded", function () { 
    for(index = 0;index < palabraahorcado.length;index++){
        letraspalabra.push([letras[index],espacios[index],palabraahorcado[index]])
        document.getElementById(espacios[index]).style.display = "initial";
    }
    letrasrestantes = palabraahorcado.length;
    imprimirletrascorrectas();
 });

 document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(intentos < 10 && letrasrestantes > 0){
        [coincidencia,indice] = coincidenciaahorcado(keyName);
        if(coincidencia){
            var letrausada = letraesta(letrasusadascorrectas,keyName);
            letrasusadascorrectas.push(keyName);
            if(letrausada == false){
                mostrarletrascorrectas(keyName);
            }
        }else{
            var letrausada = letraesta(letrasusadas,keyName);
            if(letrausada == false){
                letrasusadas.push(keyName);
                document.getElementById(ahorcado[intentos]).style.display = "initial";
                imprimirletrasusadas();
                intentos++;
            }
        }
    }else{
        alert("El juego termino, juegue de nuevo");
    }
  });

function cargarpalabras(){
    palabras = [];
    var palabraslength = localStorage.getItem(keynumeropalabras);
    for(var index = 0;index < palabraslength; index++){
        palabras.push(localStorage.getItem(keysavename+(index+1)));
    }
    return palabras;
}

function coincidenciaahorcado(letter){
    for(index = 0;index < letraspalabra.length;index++){
        if(letter.toLowerCase() == letraspalabra[index][2].toLowerCase()){
            return [true,index];
        }
    }
    return [false,-1];
}

function imprimirletrasusadas(){
    document.getElementById("letras-usadast").innerHTML="";
    for (var index = 0;index<letrasusadas.length;index++){
        document.getElementById("letras-usadast").innerHTML += " " + letrasusadas[index]; + " ";
    }
}

function mostrarletrascorrectas(keyletter){
    for (var index = 0;index<letraspalabra.length;index++){
        if(letraspalabra[index][2].toLowerCase() == keyletter.toLowerCase()){
            document.getElementById(letraspalabra[index][0]).style.display = "initial";
            letrasrestantes--;
        } 
    }
}

function imprimirletrascorrectas(){
    for (var index = 0;index<letraspalabra.length;index++){
        document.getElementById(letraspalabra[index][0]).innerHTML= letraspalabra[index][2];
    }
}

function letraesta(inputarray,inputkey){
    for(var index = 0;index < inputarray.length;index++){
        if(inputkey.toLowerCase() == inputarray[index].toLowerCase()){
            return true;        }
    }
    return false;
}

function nuevojuego(){
    location.href = "nuevojuego.html";
}

function desistir(){
    location.href = "startmenu.html";
}