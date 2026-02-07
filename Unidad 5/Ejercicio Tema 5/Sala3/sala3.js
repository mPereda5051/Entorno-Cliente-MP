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
   gastarEnergia(cantidad) {
      if (this.#energia < cantidad) {
         return false;
      }
      this.#energia -= cantidad;
      return true;
   }

   recargar(cantidad) {
      this.#energia += cantidad;
   }

   tieneEnergia() {
      return this.#energia > 0;
   }
}