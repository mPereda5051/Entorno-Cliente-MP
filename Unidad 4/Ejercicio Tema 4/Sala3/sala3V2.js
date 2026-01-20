import { Artefacto } from "./sala3.js";
import { Cargador } from "./herencia.js";

export class Room {
    constructor(output) {
        this.output = output;
        this.artefacto = null;


        this.llaveUsada = false;
        this.colganteUsado = false;

        this.artefactos = {
            cristal: new Artefacto("Cristal de energía", 0),
            cilindro: new Artefacto("Cilindro mágico", 0),
            llave: new Artefacto("Llave oxidada", 5),
            colgante: new Cargador("Colgante mistico", 5)
        };
    }
    mostrar(text) {
        this.output.textContent = text;
    }
    seleccionar(nombre) {
        this.artefacto = this.artefactos[nombre];
        this.mostrar(this.artefacto.describir());
    }

    usar() {
        if (!this.artefacto) {
            this.mostrar("No tienes ningún artefacto seleccionado.");
            return;
        }

        if (this.artefacto.nombre === "Llave oxidada") {
            this.llaveUsada = true;
            this.mostrar("Has activado la llave. Algo parece iluminarse...");
            this.reload();
            return;
        }

        if (this.artefacto.nombre === "Colgante mistico") {
            const mensaje = this.artefacto.canalizar();
              this.colganteUsado = true; 
            this.mostrar(mensaje);
            this.reload();
            return;
        }



        this.mostrar("Este artefacto no hace nada por sí solo.");
    }


    abrir() {
        const cristal = this.artefactos.cristal;
        const cilindro = this.artefactos.cilindro;

        if (cristal.tieneEnergia() && cilindro.tieneEnergia()) {
            this.mostrar("Felicidades, lograste completar el puzzle. La puerta se abre, ves la siguiente sala.... y encuentras una caja en el suelo.");
               setTimeout(() => {
            window.location.href = "../Sala1/sala1.html";
        }, 1500);

        } else {
            this.mostrar("La puerta no se mueve, pero notas que el cilindro y el cristal reaccionan ante la puerta.");
        }
    }

    reload() {
        if (this.llaveUsada && this.colganteUsado) {
            this.artefactos.cristal.recargar(5);
            this.artefactos.cilindro.recargar(5);

            this.mostrar(
                "El cristal y el cilindro se han cargado energía."
            );

            this.llaveUsada = false;
            this.colganteUsado = false;
        }
    }



}
