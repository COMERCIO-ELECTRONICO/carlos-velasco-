const EventEmitter = require('events')

class entrarALaCasa extends EventEmitter{
}
const entrarCasa = new entrarALaCasa()
var nombreEvento = 'entrar por la puerta de adelante hola'

//evento que escucha
//ON
entrarCasa.on('entrar por la puerta de adelante', (nombre) => {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`)
})

//evento que emite EMIT

entrarCasa.emit('entrar por la puesta de adelante', 'carlos')