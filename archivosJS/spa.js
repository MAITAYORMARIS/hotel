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
                        <h4>${array[i].nombre}</h4>
                        <p>${array[i].info}</p>
                        <p><i class="fa-solid fa-clock"></i>Duracion: ${array[i].duracion}</p>
                        <p><i class="fa-solid fa-circle-info"></i>Condiciones: ${array[i].condiciones}</p>
                        <div class="enlacesServicios">
                            <button class="miBoton">Mas Info</button>
                            <button class="miBoton">Reservar</button>
                        </div>
                        
                    </div>
                </div>`
    }

    else {
      html +=
        `
        <div class="productosItem fondo ">

                    <div class="productoInfo">
                        <h4>${array[i].nombre}</h4>
                        <p>${array[i].info}</p>
                        <p><i class="fa-solid fa-clock"></i>Duracion: ${array[i].duracion}</p>
                        <p><i class="fa-solid fa-circle-info"></i>Condiciones: ${array[i].condiciones}</p>
                        <div class="enlacesServicios">
                            <button class="miBoton">Mas Info</button>
                            <button class="miBoton">Reservar</button>
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


}

