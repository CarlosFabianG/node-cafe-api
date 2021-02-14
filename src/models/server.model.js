const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    // middlewares
    routes() {
        this.app.get('/', (req, res) => {
            res.send("Hello World!")
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`App is running in port:${this.port}`) 
        });
    }
}

module.exports = Server;