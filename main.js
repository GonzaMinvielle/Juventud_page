"use strict"

//agarro elementos del DOM
let form = document.querySelector('#form');
let btnAgregar = document.querySelector("#btnAgregar");
let btnAgregarx3 = document.querySelector("#btnAgregarx3");
let btnEliminar = document.querySelector("#btnEliminar");
let tabla = document.querySelector("#jugadores-nuevos");



// Escucho el click
btnAgregar.addEventListener('click', agregar);
btnAgregarx3.addEventListener('click', (e) => {
    agregar(e);
    agregar(e);
    agregar(e);
});
btnEliminar.addEventListener('click', (e) => {
    e.preventDefault();
    jugadores = [];
    tabla.innerHTML = " ";
    limpiar(e);
});


//Arreglo 

let jugadores = [];

function agregar(e) {

    e.preventDefault();

    let n = document.querySelector('#nombre').value;
    let ap = document.querySelector('#apellido').value;
    let ed = document.querySelector('#edad').value;
    let po = document.querySelector('#posicion').value;

    let jugador = {

        "nombre": n,
        "apellido": ap,
        "edad": ed,
        "posicion": po

    }

    jugadores.push(jugador);
    insertar();


}

function insertar() {

    let tr = document.createElement('tr');
    for (let jugador of jugadores) {
        tabla.appendChild(tr);
        tr.innerHTML = '<td>' + jugador.nombre + '</td><td>' + jugador.apellido + '</td><td>' + jugador.edad + '</td><td>' + jugador.posicion + '</td>';

    }

}

function limpiar(e) {
    e.preventDefault();

    let form = document.querySelector("#form").reset();

}








