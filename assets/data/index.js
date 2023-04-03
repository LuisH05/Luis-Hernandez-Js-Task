import {data} from "../../script/modules/datos.js"
import {creandoEvento} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')

const todasLasCartas = data.eventos

creandoEvento(todasLasCartas, $container)