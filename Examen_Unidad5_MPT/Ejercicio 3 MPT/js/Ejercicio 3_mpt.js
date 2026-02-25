let contenedor = document.getElementById("contenedor");
let arrastrable = document.getElementById("arrastrable");
let info = document.getElementById("info");

//TODO Elige el tipo de evento y completa el código
contenedor.addEventListener("mousemove", function(evento) {
     // Dimensiones incluyendo padding y borde
    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    // Para obtener la posición relativa a la ventana    

    let rect = contenedor.getBoundingClientRect();
    const coordX = evento.clientX - rect.left;
    const coordY = eventp.clientY - rect.top;

    // Posición del cursor dentro del contenedor
    const cursorX = evento.clientX;
    const cursorY = evento.clientY;

    info.textContent = `Dimensiones: ${ancho}px x ${alto}px, 
      Posición del contenedor: (${Math.round(coordX)}, ${Math.round(coordY)}), 
      Posición del cursor dentro: (${Math.round(cursorX)}, ${Math.round(cursorY)})`;
});

//TODO Completar el evento para arrastrar y soltar
contenedor.addEventListener("dragover", function(evento) {
  evento.preventDefault();
});

contenedor.addEventListener("drop", function(evento) {
  evento.preventDefault();

  contenedor.append(arrastrable);

  
  
});


