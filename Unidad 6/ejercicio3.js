// Elemento seleccionado actualmente
let elementoActual = null;

// Se quita la clase resaltado de todos los elementos
function limpiarResaltado() {
    document.querySelectorAll(".resaltado").forEach(n => n.classList.remove("resaltado"));
}

// Función para mostrar la información del elemento actual
function mostrarInfo(elem) {
    // Se muestra la información del elemento
    let out = `Elemento clicado: <${elem.tagName.toLowerCase()}>\n\n`;

    // Recorremos todos los atributos 
    out += "Atributos:\n";
    for (let attr of elem.attributes) {
        out += `  - ${attr.name}="${attr.value}"\n`;
    }


    // Mostrar los atributos específicos del dataset (es un objeto que se recorre con for..in)
    out += "\nDataset:\n";
    for (let clave in elem.dataset) {
        out += `  - ${clave} = "${elem.dataset[clave]}"\n`;
    }

    document.getElementById("info").textContent = out;  
}

// Hacer click para ver información de atributos
document.getElementById("area").addEventListener("click", function (e) {
    let elem = e.target;
    elementoActual = elem;

    limpiarResaltado();
    elem.classList.add("resaltado");

    // Mostramos el div que contiene el resto de funcionalidades
    document.getElementById("comprobaciones").style.display = "block";

    mostrarInfo(elementoActual);
});



// Comprobamos si el elemento actual tiene el atributo indicado
btnCheck.addEventListener("click", () => {
    if (!elementoActual) return;

    let nombre = attrCheck.value.trim();
    if (!nombre) return;

    resultadoCheck.textContent = 
        elementoActual.hasAttribute(nombre) ?
            `El atributo "${nombre}" SÍ existe.` :
            `El atributo "${nombre}" NO existe.`;
});


// Añadir o modificar atributos
btnSet.addEventListener("click", () => {
    if (!elementoActual) return;

    let nombre = attrName.value.trim();
    let valor = attrValue.value;

    if (!nombre) return;

    let yaExiste = elementoActual.hasAttribute(nombre);

    elementoActual.setAttribute(nombre, valor);

    resultadoSet.textContent =
        yaExiste ?
            `El atributo "${nombre}" ha sido MODIFICADO.` :
            `El atributo "${nombre}" ha sido AÑADIDO.`;

    mostrarInfo(elementoActual);
});


// Eliminar atributos
btnDel.addEventListener("click", () => {
    if (!elementoActual) return;

    let nombre = attrDel.value.trim();
    if (!nombre) return;

    if (!elementoActual.hasAttribute(nombre)) {
        resultadoDel.textContent = `No existe el atributo "${nombre}".`;
        return;
    }

    elementoActual.removeAttribute(nombre);
    resultadoDel.textContent = `Atributo "${nombre}" eliminado.`;

    mostrarInfo(elementoActual);
});


// Modificar dataset
btnData.addEventListener("click", () => {
    if (!elementoActual) return;

    let key = dataName.value.trim();
    let value = dataValue.value;

    if (!key) return;

    let texto = (elementoActual.dataset[key])?"modificado":"añadido";

    elementoActual.dataset[key] = value;

    resultadoData.textContent = `Dataset "${key}" ${texto} a "${value}".`;

    mostrarInfo(elementoActual);
});