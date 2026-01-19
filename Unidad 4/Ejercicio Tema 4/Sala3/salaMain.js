import { Room } from "./Room.js";

const output = document.getElementById("output");

const btnCristal = document.getElementById("artefacto1");
const btnCilindro = document.getElementById("artefacto2");
const btnLlave = document.getElementById("artefacto3");

const btnUsar = document.getElementById("usar");
const btnAbrir = document.getElementById("abrir");

// creamos la sala
const sala3 = new Room(output);

// selección de artefactos
btnCristal.addEventListener("click", () => {
    sala3.seleccionar("cristal");
});

btnCilindro.addEventListener("click", () => {
    sala3.seleccionar("cilindro");
});

btnLlave.addEventListener("click", () => {
    sala3.seleccionar("llave");
});

// acciones
btnUsar.addEventListener("click", () => {
    sala3.usar();
});

btnAbrir.addEventListener("click", () => {
    sala3.abrir();
});
