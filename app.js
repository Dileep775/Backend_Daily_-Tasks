const express = require ("express");
const bodyParser = require("body-parser");

const app = express(); 

app.use(bodyParser,urlencoded({ extended: false}));


app.use('/add-product',(req, res, next)=>{
    console.log("console from ADD_TO_CART");
    res.send('<form action= "/product" method="POST"> <input type="text" name ="title"> <button type="submit"> Add product </button> </form>');
}) 

app.use('/product',(req, res, next)=>{
    res.send('<h1>Data in "Product" Route</h1>');
    console.log(req.body);
})

app.listen(3000);





























// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>')
//     res.write('<head><title>Calling server from browser to print my name Dileep K C</title></head>')
//     res.write('<body><h1>Dileep K C</h1></body>')
//     res.write('</html>')
// })
// server.listen(4000)