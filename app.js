const express = require('express');
const bodyParser = require("body-parser");
const indexRouter = require('./index');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`running on localhost:${PORT}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
