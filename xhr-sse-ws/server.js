const path = require('path')
const express = require('express')

const app = express()

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client.html'))
})

app.get('/api/home', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/longpoll', (req, res) => {
    // waiting
    // const begin = Date.now()
    let i = 0
    setInterval(() => {
        res.write('hello' + i)
        i ++
        if (i === 5) {
            res.end()
        }
    }, 1000)
})

app.listen(3000, () => console.log('app listening on port 3000!'))