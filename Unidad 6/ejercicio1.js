// Mostrar información del navegador
function mostrarInfoNavigator() {
    let div = document.getElementById("infoNavigator");

    // navigator.platform está obsoleto y navigator.userAgentData.platform sería la alternativa recomendada
    div.innerHTML = `
        <strong>User-Agent:</strong> ${navigator.userAgent}<br>
        <strong>Idioma:</strong> ${navigator.language}<br>
        <strong>Cookies activadas:</strong> ${navigator.cookieEnabled}<br>      
        <strong>Plataforma:</strong> ${navigator.userAgentData.platform}<br> 
    `;
}

// La primera vez que se carga la página
mostrarInfoNavigator();


// Mostrar información de la URL
function mostrarInfoLocation() {
    let div = document.getElementById("infoLocation");
    div.innerHTML = `
        <strong>URL completa:</strong> ${location.href}<br>
        <strong>Protocolo:</strong> ${location.protocol}<br>
        <strong>URL host:</strong> ${location.host}<br>
        <strong>Ruta dentro del host:</strong> ${location.pathname}<br>
        <strong>Parámetros:</strong> ${location.search}<br>
        <strong>Sección:</strong> ${location.hash}<br>
    `;
}

// La primera vez que se carga la página
mostrarInfoLocation();


// Botones para cambiar el objeto location
const btnRecargar = document.getElementById("btnRecargar");
const btnGoogle = document.getElementById("btnGoogle");
const btnSeccion = document.getElementById("btnSeccion");
const btnParam = document.getElementById("btnParam");

btnRecargar.addEventListener("click", () => location.reload());
btnGoogle.addEventListener("click", () => location.assign("https://www.google.com"));
btnSeccion.addEventListener("click", () => {
    location.hash = "infoHash";

    // Actualizamos información de location
    mostrarInfoLocation();
});
btnParam.addEventListener("click", () =>  location.search = "usuario=student&modo=admin");


// Modificar parámetros desde formulario
document.getElementById("btnAplicarParametros").addEventListener("click", () => {
    let nombre = document.getElementById("paramNombre").value.trim();
    let edad = document.getElementById("paramEdad").value.trim();

    let params = new URLSearchParams();
    
    if (nombre !== "") params.set("nombre", nombre);
    if (edad !== "") params.set("edad", edad);

    location.search = params.toString();
});


// Detección del hash
function actualizarHash() {
    document.getElementById("infoHash").innerText = `${(location.hash || "Ninguna")}`;
}

// Evento para detectar cambios en el hash
window.addEventListener("hashchange", actualizarHash);

// La primera vez que se carga la página
actualizarHash();

// Estado online/offline
function actualizarConexion() {
    const div = document.getElementById("estadoConexion");
    if (navigator.onLine) {
        div.innerHTML = '<span style="color: green">Conectado a Internet</span>';
    } else {
        div.innerHTML = '<span style="color: green">Sin conexión</span>';
    }
}

// Eventos para detectar cambios en la conexión
window.addEventListener("online", actualizarConexion);
window.addEventListener("offline", actualizarConexion);

actualizarConexion();