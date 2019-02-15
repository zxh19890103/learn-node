const EventEmitter = require('events')

const emitter = new EventEmitter.EventEmitter()

let k = 0
new Array(10).fill(1).map(i => ++k).forEach((i) => {
    emitter.on('event', (age, name) => {
        console.log(age, name, i)
    })
})

emitter.emit('event', 89, 'singhi')

console.log(emitter.listenerCount('event'))

console.log(emitter.getMaxListeners())

console.log(EventSource)