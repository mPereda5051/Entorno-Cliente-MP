let clasificacion = new Map();
function log(msg) {
    output.innerHTML += msg + "<br>";
}

let entidad1 = { nombre: "Paco", puntos: 30 };
let entidad2 = { nombre: "Helsing", puntos: 100 };
let entidad3 = { nombre: "Ola", puntos: 20 };

const key1 = Symbol("Paco");
const key2 = Symbol("Helsing");
const key3 = Symbol("Ola");



clasificacion.set(key1, entidad1);
clasificacion.set(key2, entidad2);
clasificacion.set(key3, entidad3);

function mostrarMap(clasificacion) {
    for (const [clave, valor] of clasificacion.entries()) {
        let { puntos } = valor;

        log(`Nombre: ${clave}`);
        log(`puntos: ${puntos}`);

    }
    log("<br>")
}

const entidades = new Map();
for (const [clave, valor] of clasificacion.entries()) {
    const { nombre, ...resto } = valor;
    entidades.set(nombre, resto);
}

mostrarMap(entidades);

descenso = Array.from(entidades.keys());

function descensos(...div) {
    log("Lista de descensos <br>");

    for (const division of div) {
        log(`- ${division}\n <br>`);


    }

    log("<br>")

}

log(descenso)
