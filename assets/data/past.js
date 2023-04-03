import {data} from "../../script/modules/datos.js"
import {creandoEvento} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')

const eventosPasado = data.eventos.filter(evento => evento.date < data.fechaActual)

creandoEvento(eventosPasado, $container)