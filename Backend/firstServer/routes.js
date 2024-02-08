const fs = require("fs");

const reqResHandler = (req, res) => {
    const url = req.url;
    const method = req.method;



    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Form</title></head>");
        res.write('<body> <form action= "/message" method="POST"> <input type="text name="message"> <button>send</button> </form></body>');
        res.write("</html>");
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunck) => {
            console.log(chunck);
            body.push(chunck);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            FileSystem.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

};

module.exports = reqResHandler;
//  module.exports ={
//      handler: reqResHandler,
//      text: "This is the another type of export"
//  }