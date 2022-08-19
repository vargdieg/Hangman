# Hangman

## Paginas

## StartMenu
![startmenu][1]
<br><br>
<span style="font-family:arial; font-size:1em;">Esta pagina es la primera pagina que los usuarios van a ver.
<br> Esta esta compuesta por 3 botones</span>
<br>
<span style="font-family:arial;">
1. **Ver lista palabras**: Carga la pagina lista de palabras donde se presentan todas las palabras guardadas
2. **Agregar nueva palabra**: Carga la pagina guardar palabra donde se pueden agregar o eliminar palabras
3. **Iniciar juego**: Carga la pagina de inicio de juego siempre y cuando haya al menos 1 palabra guardada
</span>
<br><br>

## Ver lista de palabras
![listapalabra][2]
<br><br>
<span style="font-family:arial; font-size:1em;">Esta pagina muestra la lista de palabras que estan disponibles para el juego del ahorcado, cuenta tambien con un boton para dirigirse a la pagina start menu</span>
<br><br>

## Ingresar palabras
![ingresopalabras][3]
<br><br>

<span style="font-family:arial; font-size:1em;">En esta página se pueden adicionar y eliminar palabras disponibles para el juego.<br> Cuenta con 4 botones</span>
<span style="font-family:arial;">
1. **Guardar y empezar**: Guarda la palabra que se ingresa en la casilla e inmediatamente empieza el juego con una palabra al azar
2. **Cancelar**: Carga la página de start menu
3. **Guardar**: Guarda la palabra que se ingresa en la casilla
4. **Eliminar palabra**: Elimina la palabra que se ingresa en la casilla, si no existe entre las palabras disponibles no se realiza ninguna eliminación
</span>

<span style="font-family:arial; font-size:1em;">**NOTA**: Para que una palabra pueda ser guardada tiene que cumplir los siguientes requisitos</span>
<span style="font-family:arial;">
1. **Una longitud entre 1 y 8 caracteres**
2. **Las letras tienen que estar en mayuscula**
3. **No debe contener ninguna acentuación o caracter especial**
4. **La palabra contiene espacios**
5. **La palabra ya se encuentra previamente disponible**
</span>

<br><br>

## Nuevo Juego
![nuevojuego][4]
<br><br>

<span style="font-family:arial; font-size:1em;">En esta página se carga el juego del ahorcado, las reglas son las siguientes: 
<br>
Se tiene una serie de espacios que deben ser llenados con letras para completar una palabra
<br><br>
Si se teclea una letra correcta, se adiciona a los espacios a donde corresponda esa letra dentro de la palabra
<br>
Si se teclea una letra erronea, se adiciona una figura al muñeco ahorcado, y se imprime en pantalla las letras que ya hayan sido tecleadas
<br><br>
Se gana el juego si se completa la palabra antes de que el muñeco se complete
<br>
Se pierde el juego si se completa el muñeco ahorcado y no se ha completado la palabra

<br><br>
Hay 2 botones que permiten hacer:
<span style="font-family:arial;">
1. **Nuevo Juego**: Elige aleatoriamente otra palabra de las disponibles para el juego y vuelve a cargar la página
2. **Desistir**: Carga la página del menu inicial
</span>
</span>

[1]: .imagenesDocumentacion/MenuInicial.png
[2]: .imagenesDocumentacion/ListaPalabras.png
[3]: .imagenesDocumentacion/AgregarPalabra.png
[4]: .imagenesDocumentacion/NuevoJuego.png