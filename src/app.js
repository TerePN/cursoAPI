const express = require('express');
const initModels = require('./models/init.models');
const db = require('./utils/database');
const userRoute = require('./routes/users.routes');
const routerCourse = require('./routes/course.routes');
const routerVideo = require('./routes/videos.routes');
const routerCategory = require('./routes/categories.routes');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}))

const PORT = 8000;

db.authenticate()
    .then(()=> console.log('autenticacion exitosa'))
    .catch((error)=> console.log(error));

db.sync({force: false})
    .then(()=> console.log('base de datos sincronizada'))
    .catch((error)=> console.log(error));

initModels();


app.get('/', (req, res) => {
    res.status(200).json('todo bien')
})

app.use('/api/v1', userRoute);

app.use('/api/v1', routerCourse);

app.use('/api/v1', routerVideo);

app.use('/api/v1', routerCategory);


app.listen(PORT, ()=> console.log(`servidor corriendo en el puerto ${PORT}`))