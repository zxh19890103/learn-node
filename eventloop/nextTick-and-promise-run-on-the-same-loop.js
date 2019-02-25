const fs = require('fs')

console.log('script starts')

setImmediate(() => {
    console.log('immediate')
})

Promise.resolve().then(() => {
    console.log('promise')
})

new Promise((r) => {
    console.log('this will excute in script')
    r()
}).then(() => {
    console.log('promise: this will be on the end of event loop')
})

fs.readdir(process.cwd(), () => {
    console.log('pending callbacks: this is an I/O callback.')
})

process.nextTick(() => {
    console.log('next tick')
})

console.log('script ends')
console.log('begin event loop')

setTimeout(() => {
    console.log('timers: timeout')
}, 0)