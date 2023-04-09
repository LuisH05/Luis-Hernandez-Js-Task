import {data} from "../../script/modules/datos.js"
import {creandoEvento, createCheckbox, crossFilter} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')
const $checkBox = document.getElementById('ckeckBox')
const $search = document.getElementById('busqueda')


const eventosPasado = data.eventos.filter(evento => evento.date < data.fechaActual)
const listCategory = [...new Set (eventosPasado.map(cart => cart.category))]

createCheckbox(listCategory, $checkBox)
creandoEvento(eventosPasado, $container)

$checkBox.addEventListener('change', () => {
    let checkSelector = [...document.querySelectorAll('input[type = "checkbox"]:checked')].map(check => check.id)

    const cardFilters = crossFilter(eventosPasado, checkSelector, $search.value)
    creandoEvento(cardFilters, $container)
})

$search.addEventListener('keyup', () => {
    let checkSelector = [...document.querySelectorAll('input[type = "checkbox"]:checked')].map(check => check.id)

    const cardFilters = crossFilter(eventosPasado, checkSelector, $search.value)
    creandoEvento(cardFilters, $container)
})







