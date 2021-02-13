const express = require('express');
const app = express();
const PORT = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
}) 

app.listen(PORT, () => {
    console.log(`App is running in port:${PORT}`) 
});