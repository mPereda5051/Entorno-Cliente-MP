const resultado = document.getElementById("resultado");

const btn1 = document.getElementById("nivel1");
const btn2 = document.getElementById("nivel2");
const btn3 = document.getElementById("nivel3");
const btn4 = document.getElementById("nivel4");
const btn5 = document.getElementById("nivel5");

let nivelActual = 0;

// Elementos añadidos durante la secuencia y necesarios en varios niveles
let nivelDiv = null;
let parrafoPrincipal = null;
let titulo = null;

// NIVEL 1: createElement + append
btn1.addEventListener("click", () => {

    // Reseteamos
    resultado.innerHTML = ""; 
    nivelActual = 1;

    // Creamos div, h2 y p dinámicamente
    nivelDiv = document.createElement("div");

    titulo = document.createElement("h2");
    titulo.textContent = "Nivel 1";

    parrafoPrincipal = document.createElement("p");
    parrafoPrincipal.textContent = "Escenario creado";

    // Se inserta contenido en el div
    nivelDiv.append(titulo);
    nivelDiv.append(parrafoPrincipal);

    // Se inserta el resultado en el panel principal
    resultado.append(nivelDiv);

    // Esto sería con innerHTML que es menos eficiente
    // resultado.innerHTML("<div><h2>Nivel 1</h2><p>Escenario creado</p></div>")
});


// NIVEL 2: prepend + append
btn2.addEventListener("click", () => {
    // Comparamos nivel y actualizamos
    if (nivelActual != 1) return alert("Completa el Nivel 1 o no repitas el mismo nivel");
    nivelActual = 2;

    // Añadimos párrafo al principio del div con el contenido
    const alerta = document.createElement("p");
    alerta.style.color = "red";
    alerta.textContent = "Atención";

    nivelDiv.prepend(alerta);

    // Añadimos párrafo al final del div con el contenido
    const listo = document.createElement("p");
    listo.style.color = "green";
    listo.textContent = "Listo";

    nivelDiv.append(listo);
});


// NIVEL 3: before + after
// -----------------------------
btn3.addEventListener("click", () => {
    // Comparamos nivel y actualizamos
    if (nivelActual != 2) return alert("Completa niveles previos o no repitas el mismo nivel");
    nivelActual = 3;

    // Añadimos contenido antes y después
    const hr = document.createElement("div");
    hr.style.borderTop = "1px solid black";
    titulo.before(hr);    

    const boton = document.createElement("button");
    boton.textContent = "Acción";

    parrafoPrincipal.after(boton);
});


// NIVEL 4: replaceWith + remove
btn4.addEventListener("click", () => {
    if (nivelActual != 3) return alert("Completa niveles previos o no repitas el mismo nivel");
    nivelActual = 4;

    const nuevoParrafo = parrafoPrincipal.cloneNode(true);
    nuevoParrafo.textContent = "Escenario reparado";
    nuevoParrafo.style.color = "orange";
    nuevoParrafo.style.fontSize = "24px";

    // Se reemplaza el párrafo por otro clonado y con nuevos estilos    
    parrafoPrincipal.replaceWith(nuevoParrafo);
    parrafoPrincipal = nuevoParrafo;

    const division = nivelDiv.querySelector("div");
    if (division) {
        division.remove();
    }
});


// NIVEL 5: insertAdjacentHTML
btn5.addEventListener("click", () => {
    if (nivelActual != 4) return alert("Completa niveles previos o no repitas el mismo nivel");
    nivelActual = 5;

    // Se inserta texto al principio y al final
    nivelDiv.insertAdjacentHTML("afterbegin", `<h1>Juego terminado</h1>`);

    nivelDiv.insertAdjacentHTML("beforeend", `
        <ul>
            <li>Vida: 3UP</li>
            <li>Puntos: 100</li>
        </ul>
    `);
});
