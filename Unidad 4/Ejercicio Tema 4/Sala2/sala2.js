let libros = [];

//creamos la variable con Map()

const biblioteca = new Map();

//creamos la variable con set()
const pistas = new Set();

biblioteca.set("libro1","Las paginas estan vacias....");
biblioteca.set("libro2","El libro tiene simbolos raros, parece un kanji japones.");
biblioteca.set("libro3","Este libro cuenta la historia de un antiguo demonio, cosa rara porque este era un libro de juegos, a lo mejor es ficcion");
biblioteca.set("libro4","El libro contiene una palabra, 'RIRBA'");

//creamos las variables para poder usar los botones
const libro1 = document.getElementById("libro1");
const libro2 = document.getElementById("libro2");
const libro3 = document.getElementById("libro3");
const libro4 = document.getElementById("libro4");

const output = document.getElementById("output");

//funcion para revisar el libro
function revisar(idLibro) {
    if(libros.includes(idLibro)){
        output.textContent = "Ya has revisado este libro, no contiene nueva informacion";
        return;

    }

    //guardamos el elibro en el array
    libros.push(idLibro);
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

