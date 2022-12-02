const CourseServices = require('../services/course.services');

const getAllCourses = async (req, res) => {
    try {
        const result = await CourseServices.getAllCourses();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const createCourse = async ( req, res) => {
    try {
        const newCourse = req.body;
        console.log(newCourse);
        const result = await CourseServices.createCourse(newCourse);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
};

const getCoursesWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const result = await CourseServices.getAllCoursesCategories(id)
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const updateCourses = req.body;
        const result = await CourseServices.updateCourse(updateCourses, id);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCourses,
    createCourse,
    getCoursesWithCategories,
    updateCourse,
}