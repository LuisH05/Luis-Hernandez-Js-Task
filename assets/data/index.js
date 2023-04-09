import {data} from "../../script/modules/datos.js"
import {creandoEvento, createCheckbox, crossFilter} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')
const $checkBox = document.getElementById('ckeckBox')
const $search = document.getElementById('busqueda')
const allCarts = data.eventos


const listCategory = [...new Set (allCarts.map(cart => cart.category))]

createCheckbox(listCategory, $checkBox)
creandoEvento(allCarts, $container)

$checkBox.addEventListener('change', () => {
    let checkSelector = [...document.querySelectorAll('input[type = "checkbox"]:checked')].map(check => check.id)

    const cardFilters = crossFilter(allCarts, checkSelector, $search.value)
    creandoEvento(cardFilters, $container)
})

$search.addEventListener('keyup', () => {
    let checkSelector = [...document.querySelectorAll('input[type = "checkbox"]:checked')].map(check => check.id)

    const cardFilters = crossFilter(allCarts, checkSelector, $search.value)
    creandoEvento(cardFilters, $container)
})
