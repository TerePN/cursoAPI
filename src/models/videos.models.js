const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Courses = require('./courses.models');

const Videos = db.define('videos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
})

module.exports = Videos;