let output = document.getElementById("output");

// Alternativa para escribir en el div de salida con una función
function log(msg){
    output.innerHTML += msg + "<br>";
} 

// Función para mostrar el contenido de un Map de películas
// Recorremos directamente los valores
function mostrarMapPeliculas(peliculas){
    for (const valor of peliculas.values()) {     
        log(`Título: ${valor.titulo}`);
        log(`Año: ${valor.año}`);
        log(`Director: ${valor.director}`);
        log(`Género: ${valor.genero}<br>`);
    }
    log("<br>")
}

// Crear un Map con Symbol como clave y objetos como valor
let peliculas = new Map();

// Objetos de prueba (normalmente vendrían en JSON)
let peli1 = { titulo: "Inception", año: 2010, director: "Christopher Nolan", genero: "Ciencia-ficción" };
let peli2 = { titulo: "Titanic", año: 1997, director: "James Cameron", genero: "Romance" };
let peli3 = { titulo: "Matrix", año: 1999, director: "Lana Wachowski", genero: "Acción" };

// Añadir las películas al Map
peliculas.set("Inception", peli1);
peliculas.set("Titanic", peli2);
peliculas.set("Matrix", peli3);

log("Listado completo del catálogo de películas:");
mostrarMapPeliculas(peliculas)

// Crear un Set con los géneros del Map
let generosArray = Array.from(peliculas.values(), peli => peli.genero);
let generos = new Set(generosArray);

// Mostramos el Set sin necesidad de recorrerlo, aunque también se podría con for...of
log("Géneros únicos del catálogo: " + Array.from(generos).join(", ") + "<br>");

