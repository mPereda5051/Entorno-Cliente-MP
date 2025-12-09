//creamos las variables que ayudaran a abrir la puerta.

let llave = false;
let clave = false;

//Objeto
const codigo = Symbol("codigo");

let caja = {
    nombre: "Caja Antigua",
    material: "madera",

    compartimentoOculto: {
        pista: true,
        contenido: "Una llave oxidada"
    },

    [codigo]: "271103",

    observar() {
        return `Es una caja hecha de ${this.material}, parece bastante vieja.`;
    }
};

//mostar symbol
console.log(codigo);
console.log(caja[codigo]);
//obtenemos los elementos del HTML
const inspeccionar = document.getElementById("inspeccionar");
const duplicar = document.getElementById("duplicar");
const buscar = document.getElementById("buscar");
const abrir = document.getElementById("abrir");

const output = document.getElementById("output");

//aañadimos lo que hace cada boton
inspeccionar.addEventListener("click", ()=>{
    output.textContent = caja.observar();

    //en caso de tener la llave, ya se puede saber la contraseña
    let mensaje = caja.observar();

    if(llave){
        const valorCodigo = caja[codigo];
        mensaje += "Vaya, ahora que lo miras bien hay un numero grabado en la parte interna de la caja, dice " + valorCodigo;
        clave = true;
    }

    output.textContent = mensaje;
})

duplicar.addEventListener("click", () => {    
    output.textContent = "Aparecio un duende en la habitacion y te da una caja exactamente igual, no sirve de nada pero existe.";
    const copia = structuredClone(caja);
    console.log(caja);
    console.log(copia);
});

buscar.addEventListener("click", () => {
    if (caja.compartimentoOculto.pista) {
        output.textContent = "Encuentras algo: " + caja.compartimentoOculto.contenido + " Me daria prisa, sientes que te observan";
        llave = true; //cambiamos el valor para decir que si tenemos la llave

    } else if(llave){
        output.textContent="No parece que encuentres algo mas en el compartimiento";
    }
    else {
        output.textContent = "No encuentras nada...";
    }
});

abrir.addEventListener("click", () => {
    //si tenemos las llave y la clave ya podemos abrir la puerta
    if(llave && clave){
        output.textContent = "¡Se abrio la puerta! ¡Rapido entra antes de que algo pase!";
    }
    else if(!llave){
        output.textContent = "Falta la llave amigo, me temo que la puerta sigue cerrada";
    }  else if(!clave){
        output.textContent = "Falta la clave amigo, me temo que la puerta sigue cerrada";
    } else{
            output.textContent = "La puerta esta cerrada. Necesitas un código...";

    }

});


