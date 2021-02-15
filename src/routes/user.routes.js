const { Router } = require('express');
const { getUser,
        postUser,
        putUser,
        deleteUser } = require('../controller/user.controller');


const router = Router();

router.get('/', getUser);

router.post('/', postUser);

router.put('/', putUser);

router.delete('/', deleteUser);

module.exports = router;