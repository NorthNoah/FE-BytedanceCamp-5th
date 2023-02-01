 const http = require('http')
 const sever = http.createServer((req, res) => {
    res.end('hello')
 })

 const port = 3000

 sever.listen(port, () => {
    console.log("listen on:", port)
 })