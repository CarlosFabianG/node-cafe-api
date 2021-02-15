
const getUser = (req, res) => {
    res.status(200).send('This is get');
};

const postUser = (req, res) => {
    res.status(201).send('This is get');
};

const putUser = (req, res) => {
    res.status(201).send('This is get');
};

const deleteUser = (req, res) => {
    res.status(201).send('This is get');
};

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
};