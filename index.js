const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

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
app.set('views', 'views')


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});