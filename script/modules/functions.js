export function crearTemplate(evento){
    return `<div class="col-11 col-md-5 col-xl-3 d-flex justify-content-center">
    <div class="card img-carta">
            <img src="${evento.image}" class="card-img-top" alt="card-1">
            
            <div class="card-body d-flex flex-column align-items-start justify-content-between">
            <h4 class="card-title">${evento.name}</h4>
            <p class="card-text m">${evento.description}<br></p>
            <div class="d-flex align-items-center justify-content-between div-price">
            <b>Price: $${evento.price}</b> 
            <a href="/assets/pages/details.html" class="btn btn-secondary">Details</a>
            </div>
        </div>
    </div>
</div>`
}

export function creandoEvento (listaEventos, contenido){
    let template = ''
        for( let evento of listaEventos ){
        template += crearTemplate(evento)
    }
    return contenido.innerHTML = template
}

