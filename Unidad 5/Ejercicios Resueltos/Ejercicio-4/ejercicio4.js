const menu = document.getElementById("menu");

// Añadimos un listener a cada etiqueta ancla del menú cuando hacemos click
menu.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (e) => {   
        e.preventDefault(); // Evitar navegación por defecto
        e.stopPropagation(); // Evita que suba a otros submenús

        // Lanzamos el evento personalizado sobre este submenú
        item.dispatchEvent(
            new CustomEvent("menuClick", {
                bubbles: false, // No se propaga aunque por defecto ya es false
                cancelable: true, // Para que funcione preventDefault (en este caso es false por defecto)
                detail: { texto: item.textContent }
            })
        );
    });

    // Escuchamos el evento personalizado en cada submenú
    item.addEventListener("menuClick", (e) => {
         // Abrir nueva ventana simulando la navegación
        const nuevaVentana = window.open("", "_blank", "width=400,height=200");
        nuevaVentana.document.body.innerHTML = e.detail.texto;
    });
});