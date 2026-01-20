import { Artefacto } from "./sala3.js";

export class Room {
    constructor(output) {
        this.output = output;
        this.artefacto = null;

        this.artefactos = {
            cristal: new Artefacto("Cristal de energía", 0, "energia"),
            cilindro: new Artefacto("Cilindro mágico", 0, "canalizador"),
            llave: new Artefacto("Llave oxidada", 5, "mecanico"),
            colgante: new Artefacto("Colgante mistico", 5, "canalizador")
        };
    }
    mostrar(text) {
        this.output.textContent = text;
    }
    seleccionar(nombre) {
        this.artefacto = this.artefactos[nombre];
        this.mostrar(this.artefacto.describir()); r
    }

    usar() {
        if (!this.artefacto) {
            this.mostrar("No tienes nada en la mano. Elige un artefacto.");
            return;
        }

        if (this.artefactos["nombre"] == "Llave oxidada") {
            this.mostrar(this.artefacto.usarLlave());
        } if (his.artefactos["nombre"] == "Colgante mistico") {
            this.mostrar(this.artefacto.usarColgante());
        } else {
            this.mostrar(this.artefacto.usar());

        }

    }

    abrir() {
        const cristal = this.artefactos.cristal;
        const cilindro = this.artefactos.cilindro;

        if (cristal.tieneEnergia() && cilindro.tieneEnergia()) {
            this.mostrar("Felicidades, lograste completar el puzzle. La puerta se abre.");
        } else {
            this.mostrar("La puerta no se mueve, pero notas que el cilindro y el cristal reaccionan ante la puerta.");
        }
    }


}
