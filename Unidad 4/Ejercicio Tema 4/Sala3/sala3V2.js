import { Artefacto } from "./sala3";

export class Room {
    constructor(output) {
        this.output = output;
        this.artefacto = null;

        this.artefactos = {
            cristal: new Artefacto("Cristal de energía", 50, "energia"),
            cilindro: new Artefacto("Cilindro mágico", 70, "canalizador"),
            llave: new Artefacto("Llave oxidada", 10, "mecanico")
        };
    }

    seleccionar(nombre) {
        this.artefacto = this.artefactos[nombre];
        this.mostrar(this.artefacto.describir());
    }

    usar() {
        if (!this.artefacto) {
            this.mostrar("No tienes nada en la mano. Elige un artefacto.");
            return;
        }

        this.mostrar(this.artefacto.usar());
    }

    abrir() {
        const cristal = this.artefactos.cristal;
        const cilindro = this.artefactos.cilindro;

        if (cristal.tieneEnergia() && cilindro.tieneEnergia()) {
            this.mostrar("Felicidades, lograste completar el puzzle. La puerta se abre.");
        } else {
            this.mostrar("La puerta no se mueve, falta energía.");
        }
    }

    mostrar(texto) {
        this.output.textContent = texto;
    }
}
