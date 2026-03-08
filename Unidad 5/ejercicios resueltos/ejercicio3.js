
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    // Listener único en el menú
    menu.addEventListener("click", (event) => {
        // Buscamos si el click proviene de un <a>
        const enlace = event.target;

        // Si no es un enlace, ignoramos el click
        if (enlace.tagName != "A") return;

        // Evitar el comportamiento por defecto (navegación)
        // No iría al enlace #
        event.preventDefault();

        // Obtener el texto del enlace
        const texto = enlace.textContent.trim();

        // Abrir nueva ventana simulando la navegación
        const nuevaVentana = window.open("", "_blank", "width=400,height=200");
        nuevaVentana.document.body.innerHTML = texto;
    });

    // Listener para evitar ENTER
    menu.addEventListener("keydown", (event) => {
        // Buscamos si el click proviene de un <a>
        const enlace = event.target;

        // Si no es un enlace, ignoramos la tecla
        if (enlace.tagName != "A") return;

        // Solo actua si la tecla es Enter
        if (event.key === "Enter") {
            event.preventDefault(); // Evita la redirección automática
        }
    });
});
