let formulario = document.getElementById("formulario");
let input = document.getElementById("inputTexto");

// TODO Bloquear todo lo que no sean letras o enter
input.addEventListener("keydown", (evento) => {

  const tecla = evento.key;

  //validacion de solo letras
  const validacion = /^[a-zA-Z]$/;

  if (!validacion.test(tecla)) {
    evento.preventDefault();

  }

  if(tecla == "Enter"){
    evento.preventDefault();
    return;
  }



});

// TODO Añadir tipo de evento y validación
input.addEventListener("", function () {

  const validacion10 = /^{,9}$/;

  if(!validacion10.test(input)){
    evento.preventDefault();
  }

});

// Impedir envío si hay menos de 6 caracteres
formulario.addEventListener("submit", function (evento) {
  // TODO Código para impedir envío  


  if (!validacion){
    alert("No se puede enviar");
    evento.preventDefault();
  } else{
    alert("es correcto")
  }
  


  
});
