document.addEventListener("DOMContentLoaded", function () {

    const anteriorImagenBtn = document.getElementById("anteriorImagen");
    const siguienteImagenBtn = document.getElementById("siguienteImagen");
    const carrusel = document.getElementById("carrusel");
    const imagenes = carrusel.getElementsByTagName("img");
    let imagenActual = 0;

    anteriorImagenBtn.addEventListener("click", () => {
        cambiarImagen(-1);
    });

    siguienteImagenBtn.addEventListener("click", () => {
        cambiarImagen(1);
    });

    function mostrarImagen(indice) {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = "none";
        }
        imagenes[indice].style.display = "block";
    }

    function cambiarImagen(delta) {
        imagenActual += delta;

        if (imagenActual < 0) {
            imagenActual = imagenes.length - 1;
        } else if (imagenActual >= imagenes.length) {
            imagenActual = 0;
        }
        mostrarImagen(imagenActual);
    }

});

