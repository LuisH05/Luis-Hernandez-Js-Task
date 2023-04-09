import {data} from "../../script/modules/datos.js"
import {createCardDetails} from "../../script/modules/functions.js"
const $container = document.getElementById('details-card')
const allCarts = data.eventos


let urlParams = location.search 
let params = new URLSearchParams(urlParams)
let name = params.get('id')

let cartsfilter = allCarts.filter(cart => cart.name)
let letterFound = cartsfilter.find(cart => cart.name == name)


createCardDetails(letterFound, $container)