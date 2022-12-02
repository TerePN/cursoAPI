const { Router } = require('express');
const { createUser, getUserById, getUsers, updateUser } = require('../controllers/users.controller');

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

module.exports = router;