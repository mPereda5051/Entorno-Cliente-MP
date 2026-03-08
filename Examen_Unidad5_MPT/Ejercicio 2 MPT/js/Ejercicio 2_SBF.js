// TODO Poner en funcionamiento
const lista = document.getElementById("lista");
const elementos = lista.querySelectorAll("li");

// Función manejadora de eventos
function avisarDobleClick(evento) {
  // TODO Añadir código para evitar que se propague si es un li
  

}

// Evento doble click en ul y li
lista.addEventListener("dblclick", avisarDobleClick);
elementos.forEach(function (li) {
  li.addEventListener("dblclick", avisarDobleClick);
});