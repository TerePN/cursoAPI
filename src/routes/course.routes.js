const { Router } = require('express');
const {getAllCourses, createCourse, getCoursesWithCategories, updateCourse} = require('../controllers/course.controller');

const routerCourse = Router();

routerCourse.get('/courses', getAllCourses);

routerCourse.post('/courses', createCourse);

routerCourse.get('/courses/:id', getCoursesWithCategories);

routerCourse.put('/courses/:id', updateCourse);

module.exports = routerCourse;
