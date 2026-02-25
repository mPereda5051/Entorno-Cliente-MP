const loginForm = document.getElementById("loginForm");
const mensaje = document.getElementById("loginMensaje");

loginForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Expresiones regulares
    const validacionUser = /^[a-zA-Z0-9]{4,}$/;
    const validacionPass = /^[a-zA-Z0-9]{4,}$/;

    // Validar usuario
    if (!validacionUser.test(usuario)) {
        mensaje.textContent = "Usuario no válido (mínimo 4 caracteres alfanuméricos)";
        mensaje.style.color = "red";
        return;
    }

    // Validar contraseña
    if (!validacionPass.test(password)) {
        mensaje.textContent = "Contraseña no válida (mínimo 4 caracteres alfanuméricos)";
        mensaje.style.color = "red";
        return;
    }


    mensaje.textContent = "Login correcto";
    mensaje.style.color = "green";

    setTimeout(() => {
        window.location.href = "../Sala1/sala1.html";
    }, 1500);
});
