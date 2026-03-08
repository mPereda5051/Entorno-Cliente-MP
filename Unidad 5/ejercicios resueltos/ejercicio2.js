// Elementos del DOM
const externa = document.getElementById("externa");
const media = document.getElementById("media");
const interna = document.getElementById("interna");
const info = document.getElementById("info");
const stopProp = document.getElementById("stopProp");
const stopImmediate = document.getElementById("stopImmediate");
const limpiar = document.getElementById("limpiar");

// Función para escribir mensajes en pantalla
function log(texto) {
    info.innerHTML += texto + "<br>";
}

// Manejador para fase captura o fase propagación
function manejadorClick(e) {   
    // Cadena de texto con la fase
    const fase = e.eventPhase === 1 ? "captura" :
        e.eventPhase === 2 ? "objetivo" : "propagación";

    let mensaje = `Click en ${e.target.id}, manejado en ${e.currentTarget.id}, (fase: ${fase})`;
    
    // En fase de captura creamos contador y lo actualizamos
    if (e.eventPhase === 1){        
        e.cont = (e.cont == undefined)?1:++e.cont;
    } else if (e.eventPhase === 3){
        // Solo se escribe el contador en el div más externo según el atributo data-externo 
        // Cuidado con if (e.currentTarget.dataset.externo) porque lo compara con una cadena vacía
        if (e.currentTarget.dataset.externo != undefined){
            mensaje += `, contador=${e.cont}`
        } 
    }

    log(mensaje);    
}


// Manejador especial para el div interno
function manejadorInterno(e) {
    // Cadena de texto con la fase
    const fase = e.eventPhase === 1 ? "captura" :
        e.eventPhase === 2 ? "objetivo" : "propagación";

    log(`Click en div interno (fase: ${fase})`);

    // Detener propagación si el checkbox está marcado
    if (stopProp.checked) {
        e.stopPropagation();
    }

    // Detener completamente los demás listeners
    if (stopImmediate.checked) {
        e.stopImmediatePropagation();
    }
}

// Asignar listeners en captura y propagación
externa.addEventListener("click", manejadorClick, true);  
//externa.addEventListener("click", manejadorClick);  
media.addEventListener("click", manejadorClick, true);
//media.addEventListener("click", manejadorClick);
interna.addEventListener("click", manejadorClick, true);
interna.addEventListener("click", manejadorClick);
interna.addEventListener("click", manejadorInterno);
interna.addEventListener("click", () => log("Segundo listener interno"));

// Limpiamos el contenido del párrafo
// Cuidado que this no funciona con la función flecha
info.addEventListener("click", function(){this.innerHTML = ""});
