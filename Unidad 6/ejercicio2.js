// Quitar resaltado previo
function limpiarResaltado() {
    document.querySelectorAll(".resaltado").forEach(n => {
        n.classList.remove("resaltado");
    });
}

document.body.addEventListener("click", function (event) {
    // Evitar la propagación del evento para que no se resalte el body
    event.preventDefault();
    event.stopPropagation();

    let nodo = event.target;

    // Resaltamos el nuevo elemento
    limpiarResaltado();
    nodo.classList.add("resaltado");

    // A continuación mostramos la información requerida
    let info = "";
    info += `Nodo clicado:<br>  ${nodo.nodeType === 3 ? "#text" : nodo.tagName}<br>`;
    info += `Tipo: ${nodo.nodeType === 1 ? "ELEMENT_NODE (1)" : nodo.nodeType === 3 ? "TEXT_NODE (3)" : nodo.nodeType}<br><br>`;

    // Propiedades comunes a todos los nodos
    info += "Propiedades comunes a todos los nodos<br>";
    info += `parentNode: ${nodo.parentNode ? nodo.parentNode.nodeName : "No tiene nodo padre"}<br>`;
    info += `childNodes: ${nodo.childNodes.length} nodos<br>`;
    info += `firstChild: ${nodo.firstChild ? nodo.firstChild.nodeName : "No tiene primer nodo hijo"}<br>`;
    info += `lastChild: ${nodo.lastChild ? nodo.lastChild.nodeName : "No tiene primer nodo hijo"}<br>`;
    info += `previousSibling: ${nodo.previousSibling ? nodo.previousSibling.nodeName : "No tiene nodos antes al mismo nivel"}<br>`;
    info += `nextSibling: ${nodo.nextSibling ? nodo.nextSibling.nodeName : "No tiene nodos después al mismo nivel"}<br><br>`;

    // Propiedades solo si es una etiqueta
    if (nodo.nodeType === 1) {
        info += "Propiedades exclusivas de etiquetas<br>";
        info += `parentElement: ${nodo.parentElement ? nodo.parentElement.tagName : "No tiene elemento padre"}<br>`;
        info += `children (número): ${nodo.children.length} elementos<br>`;
        info += `firstElementChild: ${nodo.firstElementChild ? nodo.firstElementChild.tagName : "No tiene primer elemento hijo"}<br>`;
        info += `lastElementChild: ${nodo.lastElementChild ? nodo.lastElementChild.tagName : "No tiene último elemento hijo"}<br>`;
        info += `previousElementSibling: ${nodo.previousElementSibling ? nodo.previousElementSibling.tagName : "No tiene elementos antes al mismo nivel"}<br>`;
        info += `nextElementSibling: ${nodo.nextElementSibling ? nodo.nextElementSibling.tagName : "No tiene elementos después al mismo nivel"}<br>`;
    }

    document.getElementById("info").innerHTML = info;
});