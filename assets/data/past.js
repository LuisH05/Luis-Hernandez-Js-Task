import {creandoEvento, createCheckbox, crossFilter} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')
const $checkBox = document.getElementById('ckeckBox')
const $search = document.getElementById('busqueda')

let eventosPasado
const url = 'https://mindhub-xj03.onrender.com/api/amazing'
fetch(url)
    .then(response => response.json())
    .then (datos => {
        eventosPasado = datos.events.filter(evento => evento.date < datos.currentDate)
        const listCategory = [...new Set (eventosPasado.map(cart => cart.category))]
        createCheckbox(listCategory, $checkBox)
        creandoEvento(eventosPasado, $container)
    })
    .catch(err => console.log(err))


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







