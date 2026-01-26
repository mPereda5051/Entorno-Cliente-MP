// a) Map con equipos y puntos
let clasificacion = new Map([
  ["Real Norte FC", 92],
  ["Atlético Sur", 85],
  ["Deportivo Este", 78],
  ["Unión Oeste", 55],
  ["Central City", 41],
  ["Racing Central", 39]
]);

let salida = document.getElementById("salida");

salida.innerHTML += "<h3>Clasificación completa</h3>";

// Mostrar Map usando desestructuración
for (let [equipo, puntos] of clasificacion) {
  salida.innerHTML += `<p>${equipo}: ${puntos} puntos</p>`;
}
salida.innerHTML += `<br>`;

// b) Convertir Map a Array filtrando equipos con menos de 42 puntos
// El parámetro _ se utiliza para ignorar el índice 0 con la clave del map que no vamos a usar
const descenso = Array.from(clasificacion)
  .filter(([_, puntos]) => puntos < 42);

salida.innerHTML += "<h3>Equipos en descenso</h3>";

descenso.forEach(([equipo, puntos]) => {
  salida.innerHTML += `<p>${equipo}: ${puntos} puntos</p>`;
});
salida.innerHTML += `<br>`;

// c) Media de puntos
let suma = Array.from(clasificacion.values()).reduce((suma, puntos) => suma + puntos, 0);
let media = suma / clasificacion.size;

salida.innerHTML += "<h3>Media de puntos</h3>";
salida.innerHTML += `<p>${media.toFixed(2)} puntos</p>`;
salida.innerHTML += `<br>`;