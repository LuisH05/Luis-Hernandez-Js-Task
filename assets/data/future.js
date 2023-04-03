import {data} from "../../script/modules/datos.js"
import {creandoEvento} from "../../script/modules/functions.js"

const $container = document.getElementById('container-card')

const eventosFuturos = data.eventos.filter(evento => evento.date > data.fechaActual)

creandoEvento(eventosFuturos, $container)

