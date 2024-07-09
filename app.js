let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 0;
let listaNumerosSorteados = [];

// seleccionar elementos a manipular
const intentar = document.querySelector('button');
const reintentar = document.querySelector('#reiniciar');

// eventos
intentar.addEventListener('click', mostrarAlerta);
reintentar.addEventListener('click', reiniciar);

// función asignar elemento y texto 
function asignarElementoYTexto(Elemento, texto) {
    let selector = document.querySelector(Elemento);
    selector.textContent = texto;
}

// función mostrar alerta para cuando el usuario digite el número correcto o cuando sea mayor o menor.
function mostrarAlerta() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // Convertir a número
    if (numeroSecreto === numeroUsuario) {
        asignarElementoYTexto('p', `Acertaste el número secreto crack en ${intentos} intentos`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        intentar.setAttribute('disabled', 'true'); // Deshabilitar el botón de intentar
    } else if (numeroSecreto > numeroUsuario) {
        asignarElementoYTexto('p', 'El número secreto es mayor');
    } else {
        asignarElementoYTexto('p', 'El número secreto es menor');
    }
    intentos++;
    limpiar();
}

// función limpiar
function limpiar() {
    document.getElementById('valorUsuario').value = '';
}

// condiciones iniciales para cuando se reinicie el juego mostrar todo 
function condicionesIniciales() {
    asignarElementoYTexto('h1', 'Bienvenido a Adivina el Número');
    asignarElementoYTexto('p', `Adivina el número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('valorUsuario').removeAttribute('disabled'); // Asegurarse de habilitar el campo de entrada
    intentar.removeAttribute('disabled'); // Asegurarse de habilitar el botón de intentar
}

condicionesIniciales();

// función reiniciar juego
function reiniciar() {
    condicionesIniciales();
    limpiar();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Deshabilitar el botón de reiniciar
}

// función generar número secreto
function generarNumeroSecreto() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}
















//variables
/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10

//seleccionar elementos a manipular
const boton = document.querySelector('button')
const botonReiniciar = document.querySelector('#reiniciar')
//eventos
botonReiniciar.addEventListener('click' , reiniciarJuego)
boton.addEventListener('click' , mostrarAlerta)


//funcion asignar elemento y texto 
function asignarElementos(elemento,texto){
    const elementoyTexto = document.querySelector(elemento)
    elementoyTexto.textContent = texto
    }

//funcion mostrar alerta para cuando el usuario digite el numero correcto o cuando sea mayor o menor.
function mostrarAlerta(){
let numeroUsuario = Number(document.getElementById('valorUsuario').value)
console.log(numeroSecreto)
if(numeroUsuario === numeroSecreto){
asignarElementos('p' , `acertaste el numero en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`)
//una vez acertamos el numero removemos el atributo disabled del boton nuevo juego
document.getElementById('reiniciar').removeAttribute('disabled')
}

//aplicamos logica para dar tips al jugador si el numero ingresado es mayor o menor
else if(numeroUsuario < numeroSecreto){
asignarElementos('p' , 'el numero secreto es mayor')
}else{
asignarElementos('p' , 'el numero secreto es menor')
}
limpiar();
intentos++
}
//funcion limpiar
function limpiar(){
    document.querySelector('#valorUsuario').value = ''
  
}

//condicionesIniciales para cuando se reinicie el juego mostrar todo 
function condicionesIniciales (){
    asignarElementos('h1' , 'JUEGO MACABRO')
    asignarElementos('p' , `elige un numero del 1 al ${numeroMaximo}` )
    numeroSecreto = generarNumeroSecreto()
     intentos = 1
}

//funcion reiniciar juego
function reiniciarJuego(){
limpiar()
condicionesIniciales()
document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

//funcion generar numero secreto
function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//si ya sorteamos todos los numeros para salir solucion de problema de recursividad
if(listaNumerosSorteados.length === numeroMaximo){
asignarElementos('p','ya se sortearon todos los numeros')
}else{
//si el numero generado esta en la lista aplicamos recursividad 
if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
}else{
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
}
}
}
*/