 const http = require('http')
 const sever = http.createServer((req, res) => {
   const bufs = []
   req.on('data', (buf) => {
      bufs.push(buf)
   })
   req.on('end', () => {
      // bufs
      const buf = Buffer.concat(bufs).toString('utf8')
      let msg = 'hello'
      try {
         const ret = JSON.parse(buf)
         msg = ret.msg
      } catch (err) {

      }
      const responseJson = {
         msg: `receive: ${msg}`
      }
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(responseJson))
   })
 })

 const port = 3000

 sever.listen(port, () => {
    console.log("listen on:", port)
 })