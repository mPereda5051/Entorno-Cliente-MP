const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");


// Evitar comportamientos por defecto al posicionarnos en el área
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("highlight");
});

// Gestión del archivo soltado
dropArea.addEventListener("drop", e => {
    // Hay navegadores que abren el documento por defecto
    e.preventDefault();

    // Si se arrastra cualquier cosa que no sea un archivo, se muestra un alert
    if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        mostrarInfo(file);       
    }

    dropArea.classList.remove("highlight");
});

// Se elimina el borde azul si nos dejamos de posicionar
dropArea.addEventListener("dragleave", e => {
    dropArea.classList.remove("highlight");
});

// Mostramos un mensaje si llegamos hasta aquí, ya que significa que hemos intentado arrastrar el texto
fileInfo.addEventListener("dragend", (e) => {
    alert("Solo se pueden arrastrar ficheros");
});

// Gestión del archivo seleccionado con clic
fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    mostrarInfo(file);
});

function mostrarInfo(file) {
    fileInfo.innerHTML = `
    <h3>Archivo cargado:</h3>
    <p><strong>Nombre:</strong> ${file.name}</p>
    <p><strong>Tamaño:</strong> ${(file.size / 1024).toFixed(1)} KB</p>
    <p><strong>Tipo:</strong> ${file.type || "Desconocido"}</p>
  `;
}
