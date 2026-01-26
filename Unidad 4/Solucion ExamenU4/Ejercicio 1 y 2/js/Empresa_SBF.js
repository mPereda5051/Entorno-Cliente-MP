export default class Empresa {

  // Propiedad estática: conjunto de años de fundación
  static añosFundacionSet = new Set();

  // Campos privados
  #cif = null
  #nombreFiscal = null;
  #añoFundacion = null;

  constructor(cif, nombreFiscal, añoFundacion) {
    this.cif = cif;
    this.nombreFiscal = nombreFiscal;
    this.añoFundacion = añoFundacion;

    // Añadimos el año al Set estático
    Empresa.añosFundacionSet.add(añoFundacion);
  }  

  // get y set del CIF
  get cif() {
    return this.#cif;
  }

  set cif(cif) {
    this.#cif = cif;
  }

  // get y set nombreFiscal
  get nombreFiscal() {
    return this.#nombreFiscal;
  }

  set nombreFiscal(nombreFiscal) {
    this.#nombreFiscal = nombreFiscal;
  }

  // get y set añoFundacion
  get añoFundacion() {
    return this.#añoFundacion;
  }

  set añoFundacion(añoFundacion) {
    this.#añoFundacion = añoFundacion;
  }

  // Método estático para calcular el año mínimo
  static calcularAñoMinimo() {
    return Math.min(...Empresa.añosFundacionSet);
  }
}
