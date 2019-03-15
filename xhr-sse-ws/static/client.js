;(function(window) {
    const http = (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response)
                    }
                }
            }
            xhr.open('GET', url)
            // xhr.responseType = 'json'
            xhr.setRequestHeader('Accept', 'application/json')
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send({
                name: 'Singhi'
            })
        })
    }
    console.time('longpoll')
    http('/api/longpoll').then(res => {
        console.log(res)
    })
    console.timeEnd('longpoll')
}(window))