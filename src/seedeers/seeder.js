const db = require('../utils/database');
const initModels = require('../models/init.models');

const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');

initModels();
const courses = [
    {
        title: 'Cantando con sentimiento',
        description: 'Curso 0 a experto de canto',
        instructor: 'Juan Gabriel',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Node js y express',
        description: 'curso basico de node js y express',
        instructor: 'Mike Galvan',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Vestimenta a la moda',
        description: 'aprenderas a vestirte con un look moderno',
        instructor: 'Alejandra Gonzales',
        videoId: 1,
        categoryId: 2,
    }
];

const users = [
    {
        firstName: "Bryan",
        lastName: "Mendez",
        password: "1234",
        email: "alanm.ceron@gmail.com",
    },
    {
        firstName: "Teresa",
        lastName: "Pana",
        password: "4321",
        email: "Tere@gmail.com",
    }
];

const usersCourses = [
    {
        userId: 1,
        courseId: 1
},
    {
        userId: 2,
        courseId: 2
    }
];

const categories = [
    { name: 'Musica' },
    { name: 'Programacion' },
    { name: 'Vestimenta' },
    { name: 'etc' }
];

const videos = [
    {
        title: 'Aprendiendo js basico',
        url: 'http://youtube.com'
    },
    {
        title: 'Canto y solfeo',
        url: 'http://youtube.com'
    },
    {
        title: 'Vestimenta',
        url: 'http://youtube.com'
    }
];


db.sync({ force: true })
    .then(() => {
        setTimeout(() => {
            console.log('Insertando');
            users.forEach((user) => Users.create(user));
        }, 15000)
    })
    .then(() => {
        setTimeout(() => {
            courses.forEach((cuorse) => Courses.create(cuorse));
        }, 10000)
    })
    .then(() => {
        setTimeout(() => {
            usersCourses.forEach((usercourse) => UsersCourses.create(usercourse));
        }, 20000)
    })
    .then(() => {
        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 8000)
    })
    .then(() => {
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 5000)
    })




