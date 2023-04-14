import {table1, table2, table3} from "../../script/modules/functions.js"

const $containerTable1 = document.getElementById('body-1')
const $containerTable2 = document.getElementById('body-2')
const $containerTable3 = document.getElementById('body-3')

let allcards 
let eventosFuturos
let eventosPasado
let highestAttendance
let lowestAttendance
let higherCapacity

const url = 'https://mindhub-xj03.onrender.com/api/amazing'
fetch(url)
    .then(response => response.json())
    .then (datos => {
        allcards = datos.events
        eventosFuturos = datos.events.filter(evento => evento.date > datos.currentDate)
        eventosPasado = datos.events.filter(evento => evento.date < datos.currentDate)

        highestAttendance = (eventosPasado).reduce((previousEvent, currentEvent) => {
            if ((previousEvent.assistance / previousEvent.capacity) > (currentEvent.assistance / currentEvent.capacity)){
                return previousEvent
            }else{
                return currentEvent
            }
        })
        console.log(highestAttendance);

        lowestAttendance = (eventosPasado).reduce((previousEvent, currentEvent) => {
            if ((previousEvent.assistance / previousEvent.capacity) < (currentEvent.assistance / currentEvent.capacity)){
                return previousEvent
            }else{
                return currentEvent
            }
        })
        console.log(lowestAttendance);
        

        higherCapacity = (eventosPasado).reduce((previousEvent, currentEvent) => {
            if (currentEvent.capacity > previousEvent.capacity){
                return currentEvent
            } else{
                return previousEvent
            }
        })
        console.log(higherCapacity); 

        table1(highestAttendance, lowestAttendance, higherCapacity, $containerTable1)


        let result1 = eventosFuturos.reduce((acumu, valorAct) => {
            if (valorAct.category in acumu) {
            acumu[valorAct.category].category = valorAct.category
            acumu[valorAct.category].events += 1
            acumu[valorAct.category].assistence += (valorAct.estimate *100 / valorAct.capacity)
            acumu[valorAct.category].revenues += valorAct.price * valorAct.estimate
            } else{
                acumu[valorAct.category] = {
                    category: valorAct.category, 
                    events: 1, 
                    assistence:(valorAct.estimate * 100 / valorAct.capacity), 
                    revenues: valorAct.price * valorAct.estimate}
            }
            return acumu;
        }, []);
        table2(Object.values(result1), $containerTable2)



        let result2 = eventosPasado.reduce((acumu, valorAct) => {
            if (valorAct.category in acumu) {
            acumu[valorAct.category].category = valorAct.category
            acumu[valorAct.category].events += 1
            acumu[valorAct.category].assistence += (valorAct.assistance * 100 / valorAct.capacity)
            acumu[valorAct.category].revenues += valorAct.price * valorAct.assistance
            } else{
                acumu[valorAct.category] = {
                    category: valorAct.category, 
                    events: 1, 
                    assistence:(valorAct.assistance * 100 / valorAct.capacity), 
                    revenues: valorAct.price * valorAct.assistance}
            }
            return acumu;
        }, []);
        table3(Object.values(result2), $containerTable3)

})
.catch(err => console.log(err));