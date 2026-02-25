class ListaInteractiva {

  constructor(elemento) {
    this.elemento = elemento;
  }

  // TODO Añadir bloque para manejar eventos

  handleEvent(evento) {
    switch (evento.type){
      case "click":
        this.cambiarColorLi();
      break;
      case "dbclick":
        this.cambiarColordb();
      break;

    }


  }

  cambiarColorLi(){
    this.elemento.style.color = "blue";
  }

  cambiarColordb(){
    this.elemento.style.backgroundColor ="green";
  }
// Activar los listeners del elemento
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

// TODO Poner en funcionamiento los manejadores de eventos

let li= document.getElementsByTagName("li");
let ul = document.getElementById("lista");

const gestor = new ListaInteractiva(ul);

let activo = false;

