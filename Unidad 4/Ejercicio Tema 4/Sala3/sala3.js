export class Artefacto {
   #energia;

   constructor(nombre, poder) {
      this.nombre = nombre;
      this.poder = poder;
      this.#energia = 0;
   }


   describir() {
      return `Es un objeto extraño, con solo agarrarlo sabes su nombre, es ${this.nombre}, ademas sientes que es poderoso si lo describiras en numeros dirias que tiene un aproximado de ${this.poder}.`
   }

   usar() {
      if (this.#energia <= 0) {
         return `${this.nombre} está completamente descargado.`;
      }
      this.#energia -= 5;
      return `${this.nombre} ha perdido brillo, Energía restante: ${this.#energia}%.`;
   }
   usarLlave(){
      if (this.#energia <=0){
         return `${this.nombre} está completamente descargado.`;

      }this.#energia -= 5;
      return `${this.nombre} ha perdido brillo, Energía restante: ${this.#energia}%.`;
   }
   usarColgante(){
      if (this.#energia <=0){
         return `${this.nombre} está completamente descargado.`;

      }this.#energia -= 5;
      return `${this.nombre} ha perdido brillo, Energía restante: ${this.#energia}%.`;
   }

   tieneEnergia() {
      return this.#energia > 0;
   }
}