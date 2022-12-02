const Users = require("./users.models");
const Courses = require("./courses.models");
const UsersCourses = require('./usersCourses.models');
const Videos = require('./videos.models');
const Categories = require('./categories.models');

const initModels = () => {
    // 1 --> n users - usersCourses
    Users.belongsToMany(Courses, {through: 'users_courses'});

    Courses.belongsToMany(Users, {through: 'users_courses'});

    //1 -> n 
    Videos.hasMany(Courses, {as: 'courses_videos', foreignKey: 'video_id'});
    Courses.belongsTo(Videos, {as: 'courses_videos', foreignKey: 'video_id'});

    Categories.hasMany(Courses, {as: 'courses_categories', foreignKey: 'category_id'});
    Courses.belongsTo(Categories, {as: 'courses_categories', foreignKey: 'category_id'});
}

module.exports = initModels;