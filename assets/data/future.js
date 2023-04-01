const $container = document.getElementById('container-card')

const futuroEvento = []
const futuro = filtrarFuturo(data.eventos)


function cartasFuturo(futuro){
    return `<div class="col-11 col-md-5 col-xl-3 d-flex justify-content-center">
    <div class="card img-carta">
            <img src="${futuro.image}" class="card-img-top" alt="card-1">
            
            <div class="card-body d-flex flex-column align-items-start justify-content-between">
            <h4 class="card-title">${futuro.name}</h4>
            <p class="card-text m">${futuro.description}<br></p>
            <div class="d-flex align-items-center justify-content-between div-price">
            <b>Price: $${futuro.price}</b> 
            <a href="./assets/pages/details.html" class="btn btn-secondary">Details</a>
            </div>
        </div>
    </div>
</div>`
}



function filtrarFuturo(arrayEvento){
    const fechaFiltro = data.fechaActual
    let auxFuturo = []

    for (let futuro of arrayEvento) {
        if (futuro.date > fechaFiltro){
            auxFuturo.push(futuro)
        }
    }
    return auxFuturo
}



let template = ''

for( let futuroEvento of futuro ){
    template += cartasFuturo(futuroEvento)
}

$container.innerHTML = template
