document.addEventListener("DOMContentLoaded", function () {

    //  Apertura de formulario de reserva de habitaciones

    const abrirFormulario = document.querySelectorAll("#reservar1, #reservar2, #reservar3, #reservar4");

    abrirFormulario.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const formulario = document.getElementById("formulario");
            formulario.style.display = "block";
        });
    });

    const cerrarFormulario = document.getElementById("cerrarFormulario");
    cerrarFormulario.addEventListener("click", function () {
        const formulario = document.getElementById("formulario");
        formulario.style.display = "none";
    });

    // Envío de información de reserva a la API

    const API_URL = "https://sheetdb.io/api/v1/r8hyeg50syk18";

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
        window.location.href = "/index.html";
    });


    // Mostrar carruseles

    function inicializarCarrusel(abrirBtn, cerrarBtn, carrusel, imagenes, anteriorBtn, siguienteBtn) {
        let imagenActual = 0;

        abrirBtn.addEventListener("click", () => {
            carrusel.style.display = "block";
            mostrarImagen(imagenActual);
        });

        cerrarBtn.addEventListener("click", () => {
            carrusel.style.display = "none";
        });

        anteriorBtn.addEventListener("click", () => {
            cambiarImagen(-1);
        });

        siguienteBtn.addEventListener("click", () => {
            cambiarImagen(1);
        });

        function mostrarImagen(indice) {
            for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].style.display = "none";
            }
            imagenes[indice].style.display = "block";
        }

        function cambiarImagen(i) {
            imagenActual += i;

            if (imagenActual < 0) {
                imagenActual = imagenes.length - 1;
            } else if (imagenActual >= imagenes.length) {
                imagenActual = 0;
            }
            mostrarImagen(imagenActual);
        }
    }

    inicializarCarrusel(
        document.getElementById("abrirCarrusel1"),
        document.getElementById("cerrarCarrusel1"),
        document.getElementById("carrusel1"),
        document.getElementById("carrusel1").getElementsByTagName("img"),
        document.getElementById("anteriorImagen1"),
        document.getElementById("siguienteImagen1")
    );
    inicializarCarrusel(
        document.getElementById("abrirCarrusel2"),
        document.getElementById("cerrarCarrusel2"),
        document.getElementById("carrusel2"),
        document.getElementById("carrusel2").getElementsByTagName("img"),
        document.getElementById("anteriorImagen2"),
        document.getElementById("siguienteImagen2")
    );
    inicializarCarrusel(
        document.getElementById("abrirCarrusel3"),
        document.getElementById("cerrarCarrusel3"),
        document.getElementById("carrusel3"),
        document.getElementById("carrusel3").getElementsByTagName("img"),
        document.getElementById("anteriorImagen3"),
        document.getElementById("siguienteImagen3")
    );
    inicializarCarrusel(
        document.getElementById("abrirCarrusel4"),
        document.getElementById("cerrarCarrusel4"),
        document.getElementById("carrusel4"),
        document.getElementById("carrusel4").getElementsByTagName("img"),
        document.getElementById("anteriorImagen4"),
        document.getElementById("siguienteImagen4")
    );

});



