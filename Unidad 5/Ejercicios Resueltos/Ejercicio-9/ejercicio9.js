// Apartado a. Acceso al formulario
const form = document.forms[0];

const fieldset = document.getElementById("grupoContacto");

// Apartado a. Eventos en cada campo individual
function aplicarEstiloFoco(e) {
    e.target.classList.add("foco"); // La clase "foco" está definida en el HTML por ahorrar código
}

function quitarEstiloFoco(e) {
    e.target.classList.remove("foco");
}

// Apartado a. Asignamos los eventos focus y blur a todos los campos del formulario
for (let i = 0; i < form.elements.length; i++) {
    let campo = form.elements[i];

    campo.addEventListener("focus", aplicarEstiloFoco);
    campo.addEventListener("blur", quitarEstiloFoco);
}

/*
// Otra opción es con los eventos focusin y focusout definidos en el contenedor del formulario
// Recuerda que focus y blur no funcionan por defecto en este caso
form.addEventListener("focusin", aplicarEstiloFoco);
form.addEventListener("focusout", quitarEstiloFoco);*/

// Apartado a.
// Eventos que burbujean en el FIELDSET (focusin y focusout)
// Prueba con focus y blur con el segundo parámetro a true para activar fase de propagación
fieldset.addEventListener("focusin", e => {
    fieldset.classList.add("activo"); // La clase "activo" está definida en el HTML por ahorrar código
});

fieldset.addEventListener("focusout", e => {
    fieldset.classList.remove("activo");
});


// Apartado b. Habilitar comentarios
// Se accede por ID y no name para evitar que lo envíe el formulario
document.getElementById("checkComentarios").addEventListener("input", e => {
  let checkComentarios = e.target;

  checkComentarios.checked?form.comentarios.disabled = false: form.comentarios.disabled = true; 
});

// Apartado b. Validación de que el nombre tenga solo letras y se eliminan números con el evento input
form.nombre.addEventListener("input", e => {
    let nombre = e.target;

    // Quitamos el último caracter si es un número
    if (!isNaN(nombre.value.charAt(nombre.value.length-1))){
        
        nombre.value = nombre.value.slice(0, nombre.value.length-1);

        alert("El nombre no puede tener caracteres numéricos");
    }
});

// Apartado b. Edad: solo números con el evento input
form.telefono.addEventListener("input", e => {
  let telefono = e.target;

    // Quitamos el último caracter si no es un número
    if (isNaN(telefono.value.charAt(telefono.value.length-1))){
        
        telefono.value = telefono.value.slice(0, telefono.value.length-1);

        alert("El teléfono debe tener algún caracter no numérico");
    }
});

// Apartado b. Comprobamos si el país es España
form.pais.addEventListener("change", e => {
  if (e.target.value === "España") {
    alert("Ubicación actual");
  }
});

// Apartado b. Añadimos el país cuando cambia y confirma el usuario
form.nuevoPais.addEventListener("change", e => {
  const valor = e.target.value.trim();
  if (valor !== "") {
    // Añadimos nuevo option
    const option = new Option(valor, valor);
    form.pais.add(option);

    e.target.value = ""; // limpiamos input
  }
});

// Apartado b. Validar formulario 
form.addEventListener("submit", e => {
  
  let error = false;

  Array.from(form.elements).forEach(campo => {
    // Ignorar campos sin "name". No lo hemos puesto en el botón de enviar o el campo que añade un nuevo país
    // También ignoramos la validación del checkbox (si tiene ID y no name no se tiene en cuenta aunque se mantiene en el código para ver cómo sería la validación)
    // No validamos campos deshabilitados como puede ser "Comentarios"
    if (!campo.name || campo.type === "checkbox" || campo.disabled) return;
    
    // Campos normales diferentes a checkbox no vacíos    
    if (campo.value.trim() === ""){ 
      alert(`El campo "${campo.name}" no puede estar vacío`);
      error = true;
    }
  });

  if (error) {
    e.preventDefault(); // prevenir envío real    
  } else  {
    alert("Formulario enviado correctamente");    
  }
});