const { Router } = require('express');

const envelopRouter = Router();

// Basic CRUD operation

// get
envelopRouter.get('/', (req, res) => {
    res.send("all envelops").json();
})

// post
envelopRouter.post('/', (req, res) => {
    const category = req.body.name;
    res.send(`You just created category:${category}`)
})

module.exports = envelopRouter;