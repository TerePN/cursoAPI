const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const bcrytp = require('bcrypt')

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'last_name'
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }, 
        allowNull: false,
    },
},{
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrytp.hashSync(password, 8);
            user.password = hash
        }
    }
}, {
    timestamps: true
})

module.exports = Users;