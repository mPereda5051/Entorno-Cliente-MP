let libros = [];

//creamos la variable con Map()

const biblioteca = new Map();

//creamos la variable con set()
const pistas = new Set();

biblioteca.set("libro1", "Las paginas estan vacias....");
biblioteca.set("libro2", "El libro tiene simbolos raros, parece un kanji japones.");
biblioteca.set("libro3", "Este libro cuenta la historia de un antiguo demonio, cosa rara porque este era un libro de juegos, a lo mejor es ficcion");
biblioteca.set("libro4", "El libro contiene una palabra, 'RIRBA'");

//creamos las variables para poder usar los botones
const libro1 = document.getElementById("libro1");
const libro2 = document.getElementById("libro2");
const libro3 = document.getElementById("libro3");
const libro4 = document.getElementById("libro4");
const abrir = document.getElementById("abrir");

//unidad 5 - evento de raton usando elemento
function tamaño(evento) {
    const ancho = evento.target.offsetWidth;
    const alto = evento.target.offsetHeight;

    console.log(`Este libro mide ${ancho}px de ancho y ${alto}px de alto`);
}

const output = document.getElementById("output");



//funcion para revisar el libro
function revisar(idLibro) {
    if (libros.includes(idLibro)) {
        output.textContent = "Ya has revisado este libro, no contiene nueva informacion";
        return;

    }

    //guardamos el elibro en el array
    libros.push(idLibro);
    //organizar la lista
    //Muestra por consola algún array en el que hayas realizado alguna modificación con los métodos de arrays.
    let listasort = libros.sort();
    // console.log(listasort);
    //muestra el tamaño del id del libro cada vez que lees un libro
    let tamaño = libros.map(item => item.length);
    //alert(tamaño);

    //usamos el map para obtener la pista
    const pista = biblioteca.get(idLibro);

    //Guardamos la pista en el Set
    pistas.add(pista);

    output.textContent = pista;
}

//Tema 5 handleEvent + control burbuja
const manejadorEvento = {
    handleEvent(evento){
        evento.stopPropagation();
        const idLibro = evento.target.id;
        revisar(idLibro);
    }
};

// Unidad 5- eventp de raton con coordenadas
const bibliotecaCoordenada = document.getElementById("biblioteca");

bibliotecaCoordenada.addEventListener("mousemove", (evento) => {
    const x = evento.clientX;
    const y = evento.clientY;

    console.log(`Estas en la coordenda X:${x}, Y:${y}`)


})

//Unidad 5 -  burbuja revisas
bibliotecaCoordenada.addEventListener("click", () => {
    console.log("click detectado");
});

libro1.addEventListener("click", manejadorEvento);
libro2.addEventListener("click", manejadorEvento);
libro3.addEventListener("click", manejadorEvento);
libro4.addEventListener("click", manejadorEvento);

//Unidad 5 -Eventos
window.addEventListener("resize", () => {
    console.log(`Ancho ventana: ${window.innerWidth}px`);
});

window.addEventListener("resize", () => {
    console.log(`Ancho ventana: ${window.innerWidth}px`);
});

//Unidad 5 -validacion alfanumerica

const codigoInput = document.getElementById("input"); 

codigoInput.addEventListener("keypress", (evento) => {
    const caracter = evento.key;

    //Letras y numeros
    const esAlfanumerico = /^[a-zA-Z0-9]$/.test(caracter);

    if (!esAlfanumerico){
        evento.preventDefault();
        console.log("caracter no permitido: ", caracter)
    }

});

//Unidad 5- deteccion de teclas especiales

document.addEventListener("keydown", (evento) =>{
    if (evento.ctrlKey){
        console.log("Tecla CTRL pulsada");
    }
     if (evento.shiftKey){
        console.log("Tecla SHIFT pulsada");
    }
     if (evento.key === "Enter"){
        console.log("Tecla ENTER pulsada");
    }
});


abrir.addEventListener("click", () => {
    //Creamos la variable para crear unn array con las pistas encontradas
    const pistaArray = Array.from(pistas);
    if (pistaArray.length >= 4) {
        output.textContent = "Con la informacion que tienes descifras el puzzle le la puerta y esta se abre.";
        setTimeout(() => {
            window.location.href = "../Sala3/sala3.html";
        }, 1500);
    } else {
        output.textContent = "La puerta no abre, sientes que te observan , date prisa";
    }

});


libro1.addEventListener("mouseenter", tamaño);
libro2.addEventListener("mouseenter", tamaño);
libro3.addEventListener("mouseenter", tamaño);
libro4.addEventListener("mouseenter", tamaño);

//unidad 5- drag and drop

const drop = document.getElementById("drop");

[libro1,libro2,libro3,libro4].forEach(libro => {
    libro.addEventListener("dragstart", (evento) => {
        evento.dataTransfer.setData("text", evento.target.id);
    });
});

drop.addEventListener("dragover", (evento) =>{
    evento.preventDefault();
});

drop.addEventListener("drop", (evento) => {
    evento.preventDefault();
    const idLibro= evento.dataTransfer.getData("text");
    drop.textContent = `Has soltado ${idLibro}`;

})