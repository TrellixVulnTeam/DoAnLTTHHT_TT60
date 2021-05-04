const path = require('path');
const express = require('express');

const handlebars = require('express-handlebars');
const app = express();
const morgan = require('morgan');

const port = 4000;
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const route = require('./routes')

// Import DB
const db = require('./config/db')
// // Connect DB
db.connect();

// Xử lý file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app);

app.listen(port)