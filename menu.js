"use strict"

document.querySelector("#btn-menu").addEventListener('click', (e)=>{
    e.preventDefault();
    let nav = document.querySelector("#nav");
    nav.classList.toggle("none");
});




