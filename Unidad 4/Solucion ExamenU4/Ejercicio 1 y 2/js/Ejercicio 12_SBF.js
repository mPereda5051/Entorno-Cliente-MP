// A partir de aquí se prueba el ejercicio 1
import Empresa from "./Empresa_SBF.js";

// Objetos de prueba
let empresa1 = new Empresa("A12345678", "Empresa Ejemplo 1 S.A.", 1998);
let empresa2 = new Empresa("B12345678", "Empresa Ejemplo 2 S.A.", 2006);

// Array de empresas
let arrayEmpresas = [empresa1, empresa2];

// Mostrar datos en HTML
let salida = document.getElementById("salida");
let html = "";

// Mostramos todas las propiedades 
for (let empresa of arrayEmpresas) {
  html += `<p><strong>CIF:</strong> ${empresa.cif}</p>`;
  html += `<p><strong>Nombre fiscal:</strong> ${empresa.nombreFiscal}</p>`;
  html += `<p><strong>Año fundación:</strong> ${empresa.añoFundacion}</p><br>`;

}
// Mostrar año mínimo de fundación
html += `<p><strong>Año de fundación más antiguo:</strong> ${Empresa.calcularAñoMinimo()}</p><br>`;

salida.innerHTML = html;

// A partir de aquí se prueba el ejercicio 2
// Symbol competencias
let competenciasSymbol = Symbol("Competencias");

// Objeto detalles
let detalles = {
  cifFilial: "F12345678",
  fechaCreacion: new Date(),
  [competenciasSymbol]: "Gestión de servicios tecnológicos"
};

// Clon del objeto detalles
const detallesClon = Object.assign({}, detalles);

// Recorrer todas las propiedades (incluidos Symbols)
salida.innerHTML += `<h3>Clon del objeto detalles</h3>`;

// Obtenemos todas las claves sean Symbol o no
// Otra opción sería usar un for..in y Object.getOwnPropertySymbols() para los Symbols 
Reflect.ownKeys(detallesClon).forEach(clave => {
  salida.innerHTML += `
    <p><strong>${clave.toString()}:</strong> ${detallesClon[clave]}</p>
  `;
});
salida.innerHTML += `<br>`;

// Los import deberían estar arriba pero así se ve mejor la separación entre ejercicios
import { Filial } from "./Filial_SBF.js";

//  Crear instancia de Filial
let filial1 = new Filial(
  "A11111111",
  "Empresa Matriz S.A.",
  1995,
  detalles
);

// Mostrar resultados
salida.innerHTML += `<p><strong>Filial 1:</strong> ${filial1.detalles}</p><br>`;