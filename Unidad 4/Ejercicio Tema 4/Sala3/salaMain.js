import { Room } from "./sala3V2.js";

const output = document.getElementById("output");

const btnCristal = document.getElementById("artefacto1");
const btnCilindro = document.getElementById("artefacto2");
const btnLlave = document.getElementById("artefacto3");
const btnColgante = document.getElementById("artefacto4");


const btnUsar = document.getElementById("usar");
const btnAbrir = document.getElementById("abrir");

const sala3 = new Room(output);

btnCristal.addEventListener("click", () => {
    sala3.seleccionar("cristal");
});

btnCilindro.addEventListener("click", () => {
    sala3.seleccionar("cilindro");
});

btnLlave.addEventListener("click", () => {
    sala3.seleccionar("llave");
});
btnColgante.addEventListener("click", () => {
    sala3.seleccionar("colgante");
});

btnUsar.addEventListener("click", () => {
    sala3.usar();
});

btnAbrir.addEventListener("click", () => {
    sala3.abrir();
});
