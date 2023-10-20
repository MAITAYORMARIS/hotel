let dataSpa = []

async function getData() {
  let dataApi
  let services
  await fetch("https://yormarismaita-api-services-crud.onrender.com/api/spa")
    .then(response => response.json())

    .then(json => dataApi = json)

  services = dataApi.response.services
  console.log(services)
  for (var i = 0; i < services.length; i++) {
    dataSpa.push(services[i])

  }
  construirServicios(dataSpa)
} getData()


function construirServicios(array) {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      html +=
        `
        <div class="productosItem ">
                    <div class="productosPortada zoom">
                        <img src=${array[i].image}
                            alt=${array[i].alt}>
                    </div>
                    <div class="productoInfo">
                        <h3>${array[i].nombre}</h3>
                        <p>${array[i].info}</p>
                        <p><i class="fa-solid fa-clock"></i>Duracion: ${array[i].duracion}</p>
                        <p><i class="fa-solid fa-circle-info"></i>Condiciones: ${array[i].condiciones}</p>
                        <div class="enlacesServicios">
                            <button class="miBoton botonInfo" id=${array[i]._id}>Mas Info</button>
                            <button class="miBoton botonReserva" id=reserva${array[i]._id}>Reservar</button>
                        </div>
                        
                    </div>
                </div>`
    }

    else {
      html +=
        `
        <div class="productosItem fondo ">

                    <div class="productoInfo">
                        <h3>${array[i].nombre}</h3>
                        <p>${array[i].info}</p>
                        <p><i class="fa-solid fa-clock"></i>Duracion: ${array[i].duracion}</p>
                        <p><i class="fa-solid fa-circle-info"></i>Condiciones: ${array[i].condiciones}</p>
                        <div class="enlacesServicios">
                            <button class="miBoton botonInfo" id=${array[i]._id}>Mas Info</button>
                            <button class="miBoton botonReserva" id=reserva${array[i]._id}>Reservar</button>
                        </div>
                    </div>
                    <div class="productosPortada zoom">
                        <img src=${array[i].image}
                            alt=${array[i].alt}>
                    </div>
                </div>`
    }

  }
  document.getElementById('contenedorServicios').innerHTML = html;

  var botonInfo = document.querySelectorAll(".botonInfo")
  console.log(botonInfo)

  for (var u = 0; u < botonInfo.length; u++) {


    botonInfo[u].addEventListener("click", function (e) {
      console.log(e.target.id)
      mostrarDetalle(e.target.id)
    })
  }
}



var botonReserva = document.querySelectorAll(".botonReserva")
console.log(botonReserva)

function mostrarDetalle(id) {

  var detalleServicio = []

  for (var m = 0; m < dataSpa.length; m++) {
    if (dataSpa[m]._id == id) {

      detalleServicio.push(dataSpa[m].servicios)
    }
  }
  pintarDetalle(detalleServicio[0])

  // console.log(detalleServicio[0].servicios[0].nombre)
  // var contenidoServicio
  // contenidoServicio=
  // `<p>`${detalleServicio[]}
}
function pintarDetalle(array) {
  console.log("llame a pintar detalle")
  console.log(array)
  var htmlDetalle = "";
  for (var i = 0; i < array.length; i++) {
    htmlDetalle +=
      `
        <div>
        <h3>${array[i].nombre}</h3>
<p>${array[i].detalle}</p>
        </div>`



  }
//  Swal.fire(htmlDetalle)
 Swal.fire({
  width: '80vw',
  title: '<u>Detalle del servicio</u>',
  icon: 'info',
  html:htmlDetalle,
  showCloseButton: true,
  focusConfirm: false,
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down',
  customClass: {
    container: 'contenedorAlert' // Clase CSS personalizada para el contenedor
  }
})

}
