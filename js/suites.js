document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí




const abrirFormulario = document.getElementById("reservar");
const cerrarFormulario = document.getElementById("cerrarFormulario");
const formulario = document.getElementById("formulario");

abrirFormulario.addEventListener("click", () => {
    formulario.style.display = "block";
});

cerrarFormulario.addEventListener("click", () => {
    formulario.style.display = "none";
});

const API_URL = "https://sheetdb.io/api/v1/dgrw9elzjbwke"

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = document.querySelector("form");

    let dataForm = new FormData(form);

    dataForm.append("ticket_time", new Date().toString());

    await fetch(API_URL, {
        method: "POST",
        body: dataForm,
    });

    form.classList.add("animation");

    alert("GRACIAS! Pronto nos comunicaremos con vos!");
    window.location.href = "/"; 
   
});














const abrirCarruselBtn = document.getElementById("abrirCarrusel");
const cerrarCarruselBtn = document.getElementById("cerrarCarrusel");
const carrusel = document.getElementById("carrusel");
const imagenes = carrusel.getElementsByTagName("img");
const anteriorImagenBtn = document.getElementById("anteriorImagen");
const siguienteImagenBtn = document.getElementById("siguienteImagen");
let imagenActual = 0;

abrirCarruselBtn.addEventListener("click", () => {
    carrusel.style.display = "block";
    mostrarImagen(imagenActual);
});

cerrarCarruselBtn.addEventListener("click", () => {
    carrusel.style.display = "none";
});

anteriorImagenBtn.addEventListener("click", () => {
    cambiarImagen(-1);
});

siguienteImagenBtn.addEventListener("click", () => {
    cambiarImagen(1);
});

function mostrarImagen(indice) {
    // Oculta todas las imágenes
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }
    // Muestra la imagen actual
    imagenes[indice].style.display = "block";
}

function cambiarImagen(delta) {
    // Cambia al siguiente o anterior
    imagenActual += delta;
    // Verifica los límites
    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1;
    } else if (imagenActual >= imagenes.length) {
        imagenActual = 0;
    }
    mostrarImagen(imagenActual);
}

});