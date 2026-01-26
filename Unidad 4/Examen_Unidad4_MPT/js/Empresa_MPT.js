export class Empresa{
    #cif;
    #nombreFiscal
    #anioFundacion;

    constructor(cif,anioFundacion,nombreFiscal){
        this.#cif = cif;
        this.#anioFundacion = anioFundacion;
        this.#nombreFiscal = nombreFiscal;
    }

    static calcularAñoMinimo(){
        return `El año minimo de la empresa es: ${Empresa.anioFundacion}`;

    }

}