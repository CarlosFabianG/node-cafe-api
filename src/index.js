const Server = require('./models/server.model');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// router
const envelopRouter = require('./routes/envelop.router');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// register routers
app.use('/envelop', envelopRouter)

 const server = new Server();

 server.listen();