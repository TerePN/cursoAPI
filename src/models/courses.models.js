const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Courses = db.define("courses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "videos",
            key: 'id'
        },
        field: 'video_id'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "categories",
            key: 'id'
        },
        field: 'category_id',
    },
})

module.exports = Courses;