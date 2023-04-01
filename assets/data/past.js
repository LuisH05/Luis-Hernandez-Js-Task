const $container = document.getElementById('container-card')

const pasadoEvento = []
const pasado = filtrarPasado(data.eventos)


function cartasPasado(pasado){
    return `<div class="col-11 col-md-5 col-xl-3 d-flex justify-content-center">
    <div class="card img-carta">
            <img src="${pasado.image}" class="card-img-top" alt="card-1">
            
            <div class="card-body d-flex flex-column align-items-start justify-content-between">
            <h4 class="card-title">${pasado.name}</h4>
            <p class="card-text m">${pasado.description}<br></p>
            <div class="d-flex align-items-center justify-content-between div-price">
            <b>Price: $${pasado.price}</b> 
            <a href="./assets/pages/details.html" class="btn btn-secondary">Details</a>
            </div>
        </div>
    </div>
</div>`
}



function filtrarPasado(arrayEvento){
    const fechaFiltro = data.fechaActual
    let auxPasado = []

    for (let pasado of arrayEvento) {
        if (pasado.date < fechaFiltro){
            auxPasado.push(pasado)
        }
    }
    return auxPasado
}



let template = ''

for( let pasadoEvento of pasado ){
    template += cartasPasado(pasadoEvento)
}

$container.innerHTML = template
