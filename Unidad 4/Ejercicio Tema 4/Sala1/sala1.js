//Objeto
const codigo = Symbol("codigo");

let caja = {
    nombre: "Caja Antigua",
    material: "madera",

    compartimentoOculto: {
        pista: true,
        contenido: "Una llave oxidada"
    },

    [codigo]: "271103",

    observar() {
        return `Es una caja hecha de ${this.material}, parece bastante vieja.`;
    }
};

//obtenemos los elementos del HTML
const inspeccionar = document.getElementById("inspeccionar");
const duplicar = document.getElementById("duplicar");
const buscar = document.getElementById("buscar");
const abrir = document.getElementById("abrir");

const output = document.getElementById("output");

//aañadimos lo que hace cada boton
inspeccionar.addEventListener("click", ()=>{
    output.textContent = caja.observar();
})

duplicar.addEventListener("click", () => {
    const copia = structuredClone(caja);
    output.textContent = "Aparecio un duende en la habitacion y te da una caja exactamente igual, no sirve de nada pero existe.";
});

buscar.addEventListener("click", () => {
    if (caja.compartimentoOculto.pista) {
        output.textContent = "Encuentras algo: " + caja.compartimentoOculto.contenido;
    } else {
        output.textContent = "No encuentras nada...";
    }
});

abrir.addEventListener("click", () => {
    output.textContent = "La puerta esta cerrada. Necesitas un código...";
});

//creamos las variables que ayudaran a abrir la puerta.

let llave = true;
let clave = true;
