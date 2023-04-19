import {createCardDetails} from "../../script/modules/functions.js"

const $container = document.getElementById('details-card')

let urlParams = location.search     
let params = new URLSearchParams(urlParams)
let ID = params.get('id')


let allCarts
const url = 'https://mindhub-xj03.onrender.com/api/amazing'
fetch(url)
    .then(response => response.json())
    .then (datos => {
        allCarts = datos.events.filter(cart => cart.name)
        let letterFound = allCarts.find(cart => cart._id == ID)
        createCardDetails(letterFound, $container)

    })
    .catch(err => console.log(err))
