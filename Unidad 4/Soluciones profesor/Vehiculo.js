// Ejercicio 15. Lo exportamos de manera predeterminada
export default class Vehiculo {
  // Apartado c. Nuevas propiedades
  static totalVehiculos = 0; // propiedad estática
  #kilometros = 0; // propiedad privada

  // Apartado 12a
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    Vehiculo.totalVehiculos++;
  }

  // Apartado 12a: Método para mostrar los campos de la clase
  mostrarInfo() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Antigüedad: (${this.año})`;
  }

  // Apartado 12a: Método para calcular la antigüedad
  calcularAntiguedad() {
    const actual = new Date().getFullYear();
    return actual - this.año;
  }

  // Apartado 12c. getter y setter para los kilómetros
  setKilometros(km) {
    if (km >= 0) this.#kilometros = km;
  }
  getKilometros() {
    return this.#kilometros;
  }

  // Apartado 12c. Método estático para mostrar el total de vehículos
  static mostrarTotalVehiculos() {
    return `Se han creado ${Vehiculo.totalVehiculos} vehículos.`;
  }
}

