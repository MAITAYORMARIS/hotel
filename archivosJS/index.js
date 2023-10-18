var botonNav = document.getElementsByClassName("link")
console.log(botonNav)

for (var i = 0; i < botonNav.length; i++) {
  const elementos = botonNav[i];

  elementos.addEventListener("click", function (e) {
    navegacion(e.target.id);
  })
}

function navegacion(id) {
  switch (id) {

    case "habitaciones":
      document.getElementById("habitaciones").setAttribute("href", "./habitaciones.html")
      break;
    case "restaurante":
      document.getElementById("restaurante").setAttribute("href", "./restaurante.html")
      break;
    case "spa":
      document.getElementById("spa").setAttribute("href", "./spa.html")
      construirServicios(dataSpa)
      break;
    case "nosotros":
      document.getElementById("nosotros").setAttribute("href", "./nosotros.html")
      break;
    default:
      document.getElementById("home").setAttribute("href", "./index.html")

  }
}
function toHome() {
  // console.log("llame a toHome")
  document.getElementById("home").setAttribute("href", "./index.html")
}
var prueba="a"