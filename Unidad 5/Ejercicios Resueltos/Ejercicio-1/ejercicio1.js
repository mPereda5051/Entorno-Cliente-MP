// Clase que gestiona los eventos del h1
// Está parametrizada para cualquier otro elemento
class GestorTitulo {
    constructor(elemento) {
        this.elemento = elemento;
    }

    // Manejador general solo para los eventos que se pide
    handleEvent(evento) {
        switch (evento.type) {
            case "click":
            case "dblclick":
                this.cambiarColor();
                break;
        }
    }

    // Método auxiliar: cambia el color de texto con un color aleatorio
    cambiarColor() {    
        this.elemento.style.color = `rgb(${this.rand()}, ${this.rand()}, ${this.rand()})`;
    }
    
    rand(){
        return Math.floor(Math.random() * 256);
    }

    // Activar los listeners del elemento
    // Se puede hacer desde aquí para que la clase se use en cualquier otro elemento
    activar() {
        this.elemento.addEventListener("click", this);
        this.elemento.addEventListener("dblclick", this);
    }

    // Desactivar los listeners
    desactivar() {
        this.elemento.removeEventListener("click", this);
        this.elemento.removeEventListener("dblclick", this);
    }
}

// Código principal
const titulo = document.getElementById("titulo");
const boton = document.getElementById("cambiarColor");

// Creamos la clase con el handler para el título
const gestor = new GestorTitulo(titulo);

// Activamos o desactivamos los eventos
let activo = false;
boton.addEventListener("click", () => {
    if (!activo) {
        gestor.activar();
        boton.textContent = "Desactivar listener";
    } else {
        gestor.desactivar();
        boton.textContent = "Activar listener";
    }
    activo = !activo;
});