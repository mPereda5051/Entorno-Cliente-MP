// Ejercicio 15. Necesitamos importar el Vehículo para que funcione
import Vehiculo from "./Vehiculo.js";

// Apartado 12b: Clase Coche que hereda de Vehículo
class Coche extends Vehiculo {
  constructor(marca, modelo, año, puertas, combustible) {
    super(marca, modelo, año);
    this.puertas = puertas;
    this.combustible = combustible;
  }

  // Se sobreescribe el método mostrarInfo
  mostrarInfo() {
    return `${super.mostrarInfo()} - ${this.puertas} puertas - Combustible: ${this.combustible}`;
  }
}

// Apartado 14: Se añade mixin
let mixinCombustible = {
  calcularCombustible(litros){
    if (this.combustible === "gasolina") {
      return litros * 1.5;
    } else if (this.combustible === "diesel") {
      return litros * 2;
    } else {
      alert("Error");
    }
  }
};

// Exportaciones ejercicio 15
export {Coche as default, mixinCombustible}; 