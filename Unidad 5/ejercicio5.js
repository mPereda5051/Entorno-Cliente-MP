let zona = document.getElementById("zona");
let objetivo = document.getElementById("objetivo");
let info = document.getElementById("info");
let reiniciar = document.getElementById("reiniciar");

// Mantenemos siempre el mismo color del CSS
const COLOR = objetivo.style.backgroundColor;

// Recogemos ancho y alto inicial para luego reiniciar
const ANCHO = getComputedStyle(objetivo).width;
const ALTO = getComputedStyle(objetivo).height;

// Función para mover el cuadrado aleatoriamente por el contenedor
function moverAleatoriamente() {
    // Restamos el ancho y alto del contenedor menos el tamaño del cuadrado
    let maxX = zona.clientWidth - objetivo.offsetWidth;
    let maxY = zona.clientHeight - objetivo.offsetHeight;
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);
    objetivo.style.left = `${x}px`;
    objetivo.style.top = `${y}px`;
}

// Función para generar un color RGB aleatorio
function colorAleatorio() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Al salir del área
zona.addEventListener("mouseout", () => {
    info.textContent = "Saliste del área. ¡Vuelve para continuar!";
});

zona.addEventListener("blur", () => {
    info.textContent = "Saliste del área. ¡Vuelve para continuar!";
});

// Movimiento del ratón (coordenadas) relativo al cuadrado
zona.addEventListener("mousemove", (e) => {
    // Objeto que recoge la posición (left, top, right y bottom), ancho y alto 
    let rect = zona.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    info.textContent = `Coordenadas: (${x}, ${y})`;
});

// Cuando se hace clic en el cuadrado (mousedown)
objetivo.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = colorAleatorio();
    info.textContent = "¡Impacto! Has pulsado el cuadrado";
});

// Cuando se suelta el botón del ratón
objetivo.addEventListener("mouseup", (e) => {
    e.target.style.backgroundColor = COLOR;
    info.textContent = "Has soltado el clic.";
});

// Cuando el ratón pasa por encima del cuadrado
objetivo.addEventListener("mouseover", () => {
    moverAleatoriamente();
    info.textContent = "¡Casi! El cuadrado se movió";
});

// Con el doble clic el cuadrado aumenta 10px
objetivo.addEventListener("dblclick", (e) => {
    let elem = e.target;

    elem.style.width = `${elem.offsetWidth + 10}px`;
    elem.style.height = `${elem.offsetHeight + 10}px`;
    info.textContent = "¡Golpe crítico! Doble clic detectado.";
});

// Clic derecho bloqueado
objetivo.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    info.textContent = "¡Trampa! Clic derecho bloqueado.";
});

// Botón para reiniciar el juego
reiniciar.addEventListener("click", () => {
    // Podríamos crear constantes similares al color
    objetivo.style.width = ANCHO;
    objetivo.style.height = ALTO;
    objetivo.style.backgroundColor = COLOR;
    moverAleatoriamente();
    info.textContent = "Juego reiniciado. ¡Buena suerte!";
});