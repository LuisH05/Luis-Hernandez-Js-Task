export function crearTemplate(evento){
    return `<div class="col-11 col-md-5 col-xl-3 d-flex justify-content-center">
    <div class="card img-carta">
            <img src="${evento.image}" class="card-img-top" alt="card-1">
            
            <div class="card-body d-flex flex-column align-items-start justify-content-between">
            <h4 class="card-title">${evento.name}</h4>
            <p class="card-text m">${evento.description}<br></p>
            <div class="d-flex align-items-center justify-content-between div-price">
            <b>Price: $${evento.price}</b> 
            <a href="/assets/pages/details.html?id=${evento.name}" class="btn btn-secondary">Details</a>
            </div>
        </div>
    </div>
</div>`
}

export function creandoEvento (listaEventos, contenido){
if(listaEventos.length === 0){
    contenido.innerHTML= ('<h3>Sorry there are no events to display</h3>')
}else{
    let template = ''
    for( let evento of listaEventos ){
    template += crearTemplate(evento)
}
return contenido.innerHTML = template
}
}


export function createCheckbox(listCategory, container){
    listCategory.forEach(category => {
        container.innerHTML += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
        <label class="form-check-label" for="checkbox1">${category}</label>
    </div>`
    })
}


export function filterForCategory(listCarts, arrayCategories){
    if (arrayCategories.length == 0 ){
        return listCarts
    }
    return listCarts.filter(cart =>  arrayCategories.includes(cart.category))
} 


export function filterForText(listCarts, text){
    return listCarts.filter(cart => cart.name.toLowerCase().includes( text.toLowerCase() ) || cart.description.toLowerCase().includes( text.toLowerCase() ) )
}

export function crossFilter(listCarts, category, text){
    const categorisFilter = filterForCategory(listCarts, category)
    const textFilter = filterForText(categorisFilter, text)
    return textFilter
}

export function createCardDetails(evento, container){
    let cards = ''
    cards = `  <div class="row g-0 align-items-center">
    <div class="col-md-5">
    <img src="${evento.image}" class="img-fluid template-img rounded-start" alt="img">
    </div>
    <div class="col-md-7">
    <div class="card-body">
        <h3 class="card-title">${evento.name}</h3>
        <p class="card-text"><b>Description:</b> ${evento.description}</p>
        <p class="card-text"><b>Date:</b> ${evento.data}</p>
        <p class="card-text"><b>Category:</b> ${evento.category}</p>
        <p class="card-text"><b>Place:</b> ${evento.place}</p>
        <p class="card-text"><b>Capacity:</b> ${evento.capacity}</p>
        <p class="card-text"><b>Price:</b> $${evento.price}</p>
    </div>
    </div>
</div>`
    container.innerHTML= cards
}