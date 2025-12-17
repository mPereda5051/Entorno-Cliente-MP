let libros = [];

//creamos la variable con Map()

const biblioteca = new Map();

//creamos la variable con set()
const pistas = new Set();

biblioteca.set("libro1", "Las paginas estan vacias....");
biblioteca.set("libro2", "El libro tiene simbolos raros, parece un kanji japones.");
biblioteca.set("libro3", "Este libro cuenta la historia de un antiguo demonio, cosa rara porque este era un libro de juegos, a lo mejor es ficcion");
biblioteca.set("libro4", "El libro contiene una palabra, 'RIRBA'");
biblioteca.set("cheat", "Si revisas todos los libros puedes salir.")

//creamos las variables para poder usar los botones
const libro1 = document.getElementById("libro1");
const libro2 = document.getElementById("libro2");
const libro3 = document.getElementById("libro3");
const libro4 = document.getElementById("libro4");
const abrir = document.getElementById("abrir");
const des = document.getElementById("desestructuracion");

const output = document.getElementById("output");

//funcion para revisar el libro
function revisar(idLibro) {
    if (libros.includes(idLibro)) {
        output.textContent = "Ya has revisado este libro, no contiene nueva informacion";
        return;

    }

    //guardamos el elibro en el array
    libros.push(idLibro);
    let listasort = libros.sort();
    console.log(listasort);
    let tamaño = libros.map(item => item.length);
    alert(tamaño);

    //usamos el map para obtener la pista
    const pista = biblioteca.get(idLibro);

    //Guardamos la pista en el Set
    pistas.add(pista);

    output.textContent = pista;
}



//añadimos funcionalidad a los botones
libro1.addEventListener("click", () => {
    revisar("libro1");
});

libro2.addEventListener("click", () => {
    revisar("libro2");
});

libro3.addEventListener("click", () => {
    revisar("libro3");
});

libro4.addEventListener("click", () => {
    revisar("libro4");
});

des.addEventListener("click", () => {
    for (let [key, value] of biblioteca) {
        alert(`${key}:${value}`);
    }
})



abrir.addEventListener("click", () => {
    //Creamos la variable para crear unn array con las pistas encontradas
    const pistaArray = Array.from(pistas);
    if (pistaArray.length >= 4) {
        output.textContent = "Con la informacion que tienes descifras el puzzle le la puerta y esta se abre.";
    } else {
        output.textContent = "La puerta no abre, sientes que te observan , date prisa";
    }

});

