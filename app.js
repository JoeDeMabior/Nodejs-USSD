const express = require('express');
const bodyParser = require("body-parser");
const indexRouter = require('./index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
