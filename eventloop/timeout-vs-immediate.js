const fs = require('fs')

// timeout_vs_immediate.js
setTimeout(() => {
    console.log('here: timeout');
    Promise.resolve().then(() => {
        console.log('promise')
    })
  }, 0)
  
setImmediate(() => {
    console.log('immediate')
})

fs.readFile(process.cwd() + '/text.txt', (err) => {
    if (err) {
        console.log('poll: IO error')
    } else {
        console.log('pending callback: IO callback')
    }
    fs.readFile(process.cwd(), () => {
        console.log('poll: io in io')
    })
    setTimeout(() => {
        console.log('timeout in io')
    }, 0)
    setImmediate(() => {
        console.log('immediate in io')
    })
})