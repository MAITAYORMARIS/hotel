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
}getData()


function construirServicios(array) {
    var html = "";
    for (var i = 0; i < array.length; i++) {
      html += `
          <div class="productosPortada zoom">
              <img src=${array[i].image} alt=${array[i].alt}>
              <div class="productoTitulo"><p>${array[i].nombre}</p></div>
          </div>`
          
    }
    document.getElementById('contenedorServicios').innerHTML=html;
    
 
  }
