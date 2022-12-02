const Users = require('../models/users.models');
const Courses = require('../models/courses.models');
const UsersCourses = require('../models/usersCourses.models');

class UsersServices {
    static async getUsers() {
        try {
            const result = Users.findAll({ attributes: ['id', 'firstName', 'lastName', 'email'] })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUserById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'firstName', 'lastName', 'email'],
                include: [
                    {
                        model: Courses,
                        attributes: ['title', 'description', 'instructor']
                    }
                ]
            });
            return result
        } catch (error) {
            throw error
        }
    }

    static async createUser(newUser) {
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateUser(updateUsers, id) {
        try {
            const result = await Users.update(updateUsers, {
                where: { id },
                attributes: ['firstName', 'lastName', 'password']
            });
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;