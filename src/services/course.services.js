const Course = require('../models/courses.models');
const UsersCourses = require('../models/usersCourses.models');
const Videos = require('../models/videos.models');
const Categories = require('../models/categories.models');

class CourseServices {
    static async getAllCourses() {
        try {
            const result = Course.findAll({
                attributes: ['title', 'description', 'instructor'],
                include: [
                    {
                        model: Categories,
                        attributes: ['name'],
                        as: 'courses_categories'
                    },
                    {
                        model: Videos,
                        as: 'courses_videos',
                        attributes: ['title', 'url']    
                    }
                ],

            });
            return result
        } catch (error) {
            throw error
        }
    }

    static async createCourse(newCourse) {
        try {
            const courseResult = await Course.create(newCourse)
            console.log(courseResult);
            return courseResult;
        } catch (error) {
            throw error
        }
    }

    static async getAllCoursesCategories(id) {
        try {
            const result = await Course.findAll({
                where: { id },
                attributes: ['id'],
                include: [
                    {
                        model: Categories,
                        as: 'courses_categories',
                        attributes: ['name'],
                    },
                    {
                        model: Videos,
                        as: 'courses_videos',
                        attributes: ['title', 'url']
                    }
                ],
            });
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateCourse(updateCourses, id) {
        try {
            const result = await Course.update(updateCourses, {
                where: { id },
                attributes: ['description']
            });
            return result
        } catch (error) {
            throw error
        }
    }


};


module.exports = CourseServices;