// Referencia al input
let campo = document.getElementById("campo");

// Estado de bloquear mayúsculas (desconocido al inicio)
let capsLockActivo = null;

// Se impide pulsar determinadas teclas con "keydown"
campo.addEventListener("keydown", function (event) {
    // Prueba a descomentar para validar con event.key
    let tecla = event.code;
    //let tecla = event.key.toUpperCase();

    // Con el código no hay que distinguir entre mayúsculas y minúsculas
    let vocales = ["KeyA", "KeyE", "KeyI", "KeyO", "KeyU"];
    //let vocales = ["A", "E", "I", "O", "U"];
    
    // Bloqueo de vocales
    if (vocales.includes(tecla)) {
        event.preventDefault();
        return;
    }

    // Bloqueo de combinaciones CTRL+S, CTRL+C, CTRL+V
    // Lo comentamos en el ejercicio 10 porque se controla con otros eventos
    /*if (event.ctrlKey) {
        if (tecla === "KeyC" || tecla === "KeyV") {
            alert(`Combinación CTRL + ${event.key.toUpperCase()} bloqueada`);
            event.preventDefault();
            return;
        }
    }*/

    // La única forma de saber el contenido de BLOQ MAYÚS es desde el evento keydown 
    let caps = event.getModifierState("CapsLock");

    // Detectamos activación/desactivación de BLOQ MAYÚS
    // La primera vez lo igoramos. Es solo cuando lo cambia el usuario
    if (tecla == "CapsLock" && caps !== capsLockActivo) {
        if (caps) {
            alert("BLOQ. MAYÚS activado");
        } else {
            alert("BLOQ. MAYÚS desactivado");
        }
        capsLockActivo = caps; // Actualiza el estado
    }
});

// Se impide guardar con CTRL+S
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.code == "KeyS") {
        alert(`No se permite guardar la página`);
        event.preventDefault();
        return;
    }
});


// Detectamos cuando se suelta SHIFT
campo.addEventListener("keyup", function (event) {
    if (event.key === "Shift") {
        alert("Has soltado SHIFT: dejarás de escribir en mayúsculas (si no está BLOQ. MAYÚS activado).");
    }
});


// Ejercicio 10. El portapapeles se copia en una variable
let historialCopias = "";
function guardarPortapapeles(e) { 
    // Obtenemos el texto seleccionado con "getSelection" 
    historialCopias += document.getSelection();
}

campo.addEventListener("copy", guardarPortapapeles);
campo.addEventListener("cut", guardarPortapapeles);

// Ejercicio 10. Bloqueamos el pegado normal y mostramos el texto almacenado
campo.addEventListener("paste", function (event) {
    event.preventDefault();

    alert(`Texto bloqueado hasta ahora: ${historialCopias}`);
});