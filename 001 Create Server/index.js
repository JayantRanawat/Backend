const http = require('http')

http.createServer((request, respose) =>{
    respose.end('Hello ws')
}).listen(4562)

console.log(http)