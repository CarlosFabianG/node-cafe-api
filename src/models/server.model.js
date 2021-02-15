const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        // app routes
        this.routes();
    }

    // middlewares
    middlewares() {
        // CORS
        this.app.use( cors() );
    }

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