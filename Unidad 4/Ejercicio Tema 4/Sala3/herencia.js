import { Artefacto } from "./sala3.js";

export class Cargador extends Artefacto {
   constructor(nombre, poder) {
      super(nombre, poder);
   }

   canalizar() {
      this.recargar(5);
      return `${this.nombre} recargó otro artefacto.`;
   }
}