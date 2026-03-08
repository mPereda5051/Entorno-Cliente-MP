// Ejemplo sin clases para ver cómo sería con funciones
function rand(){
    return Math.floor(Math.random() * 256);
}

function cambiarColor(event) {    
    let elemento = event.currentTarget;

    elemento.style.color = `rgb(${rand()}, ${rand()}, ${rand()})`;
}   

// Código principal
const titulo = document.getElementById("titulo");
const boton = document.getElementById("cambiarColor");

// Activamos o desactivamos los eventos
let activo = false;
boton.addEventListener("click", () => {
    if (!activo) {
        titulo.addEventListener("click", cambiarColor);
        titulo.addEventListener("dblclick", cambiarColor);
        boton.textContent = "Desactivar listener";
    } else {
        titulo.removeEventListener("click", cambiarColor);
        titulo.removeEventListener("dblclick", cambiarColor);
        boton.textContent = "Activar listener";
    }
    activo = !activo;
});