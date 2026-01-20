// Se añade en el ejercicio 13b
// En el ejercicio 15 no hace falta añadir "modo strict" porque un módulo ya lo es por defecto
// 'use strict';

// Apartado 15. Las clases se importan de los módulos
import Vehiculo from './Vehiculo.js'; 
import Coche from './Coche.js'; 
import { mixinCombustible as nuevoMetodo} from './Coche.js';

// Apartado 14. Copiamos el método calcular combustible
Object.assign(Coche.prototype, nuevoMetodo);

let output = document.getElementById("output");

// Alternativa para escribir en el div de salida con una función flecha
const log = (msg) => output.innerHTML += msg + "<br>";

// Pruebas
let v1 = new Vehiculo("Toyota", "Corolla", 2010);
let v2 = new Vehiculo("Ford", "Focus", 2015);
let v3 = new Vehiculo("Tesla", "Model 3", 2022);

// En el apartado 12c se añaden kilómetros de algunos vehículos
v1.setKilometros(15000);
v2.setKilometros(5000);

// Mostramos información por pantalla
log("Nuestros vehículos");
log(`${v1.mostrarInfo()} - ${v1.calcularAntiguedad()} años - ${v1.getKilometros()} km`);
log(`${v2.mostrarInfo()} - ${v2.calcularAntiguedad()} años - ${v2.getKilometros()} km`);
log(`${v3.mostrarInfo()} - ${v3.calcularAntiguedad()} años - ${v3.getKilometros()} km`);

// Ahora creamos un coche en el apartado 12b y en el 12c le añadimos kilómetros
const coche1 = new Coche("Seat", "Ibiza", 2018, 5, "gasolina");
coche1.setKilometros(23000);
log(`${coche1.mostrarInfo()} - ${coche1.calcularAntiguedad()} años - ${coche1.getKilometros()} km`);
log(`¿Los vehículos y coches pertenecen a la clase vehículo? ${coche1 instanceof Vehiculo && v1 instanceof Vehiculo}`);
log(`¿Los vehículos y coches pertenecen a la clase Coche? ${coche1 instanceof Coche && v1 instanceof Coche}`);

log(`Combustible para 40L: ${coche1.calcularCombustible(40)}€`);

// En el apartado 12c se muestra el total de vehículos creados
log(Vehiculo.mostrarTotalVehiculos());