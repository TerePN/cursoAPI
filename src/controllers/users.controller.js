const UsersServices = require('../services/users.services');

const getUsers = async (req, res) => {
    try {
        const result = await UsersServices.getUsers();
        res.status(200).json(result)  
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UsersServices.getUserById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.createUser(newUser)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const updateUsers = req.body;
        const result = await UsersServices.updateUser(updateUsers, id)
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUser
}