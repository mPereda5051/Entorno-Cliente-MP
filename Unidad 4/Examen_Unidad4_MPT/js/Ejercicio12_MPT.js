import { Empresa } from "./Empresa_MPT.js"; 
function log(msg) {
    output.innerHTML += msg + "<br>";
}
let empresa1 = new Empresa(2711,"21-01-2026","Clients");
let empresa2 = new Empresa(1127,"23-12-2020","Boss");


let array1 = Array.from(empresa1);
let array2 = Array.from(empresa2);

function mostrarEmpresa(...empresas){
    log("Empresas: <br>") ;
    for(const empresa of empresas){
        log(`${empresa}\n<br>`);
    }
    log("<br>");
}

let detalles = {
    cifFilial: "1234",
    fechaCreacion: 12-12-2012,

}

class Filial extends Empresa{
    #detalles =detalles;
    constructor(cif,nombreFiscal,anioFundacion,detalles){
        super(cif,anioFundacion, nombreFiscal);
        this.#detalles = detalles;
    }

    set detalles(details){
        
    }
    get detalles(){
        return this._detalles;

    }
}


mostrarEmpresa(...array1);
mostrarEmpresa(...array2);