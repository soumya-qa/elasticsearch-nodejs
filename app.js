const express = require('express');

const app = express();

//var bodyParser = require('body-parser');

app.use(express.urlencoded({
    extended: true
 }));
 
app.use(express.json());

const searchRoutes = require('./api/routes/search');

app.use('/search',searchRoutes);

module.exports = app;