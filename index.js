const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'handlebars'
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', 'views');