const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

// registration
app.engine('hbs', hbs.engine);

// setting value(hbs) to name(view engine) 
app.set('view engine', 'hbs');
app.set('views', 'views');

// providing static files
app.use(express.static('public'));

//routes
// TODO: need to replace to another file
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});