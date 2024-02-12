const fs = require("fs");

const reqResHandler = (req, res) => {
    const method = req.method;
    const url = req.url;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>response</title></head>')
        res.write('<body><h2 id="value"> </h2><form action="/message" method="POST"><input type="text" name ="message"/> <button type ="submit"> send </button> </form> </body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (error) => {
                if (error) {
                    console.error(error);
                    res.statusCode = 500;
                    res.end("Internal Server Error");
                } else {
                    res.write('<html>');
                    res.write('<head><title>response</title></head>');
                    res.write('<body><h2 id="value">  ' + message + '</h2><form action="/message" method="POST"> <input type="text" name ="message"/> <button type ="submit"> send </button></form> </body>');
                    res.write('</html>');
                    res.end();
                }
            });
        });
    }
}

module.exports = reqResHandler;