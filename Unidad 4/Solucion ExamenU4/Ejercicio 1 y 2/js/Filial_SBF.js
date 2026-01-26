import Empresa from "./Empresa_SBF.js";

export class Filial extends Empresa {

  // Campo privado
  #detalles;

  constructor(cif, nombreFiscal, añoFundacion, detalles) {
    super(cif, nombreFiscal, añoFundacion);
    
    // Solo se asigna el objeto, no se crean propiedades aquí
    this.#detalles = detalles;
  }

  // Getter de detalles
  get detalles() {
    // Desestructuración
    const { cifFilial, fechaCreacion } = this.#detalles;

    return `CIF Filial: ${cifFilial} - Fecha creación: ${fechaCreacion.toLocaleDateString()}`;
  }
}