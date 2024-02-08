// const http = require('http')
// function firstServer (req, res){
//     console.log('Dileep K C')
// } 
//  const server = http.createServer(firstServer)
// server.listen(4000)




const http = require("http");

const routes = require("./routes");

// another type of exporting
console.log("console in app.js",routes.text)

const server = http.createServer(routes);
server.listen(4000);






























// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>')
//     res.write('<head><title>Calling server from browser to print my name Dileep K C</title></head>')
//     res.write('<body><h1>Dileep K C</h1></body>')
//     res.write('</html>')
// })
// server.listen(4000)