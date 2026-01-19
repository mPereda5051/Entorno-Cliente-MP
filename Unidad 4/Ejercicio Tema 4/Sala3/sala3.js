export class Artefacto{
     #energia;

     constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
        this.#energia = 100;
     }


     describir(){
        return `Es un objeto extraño, con solo agarrarlo sabes su nombre, es ${this.nombre}, ademas sientes que es poderoso si lo describiras en numeros dirias que tiene un aproximado de ${this.poder}.`
     }

     usar(){
        this.#energia -=20;
        return `${this.nombre} ha perdido brillo, sientes que a perdido un 20% de su poder.`;
     }
}