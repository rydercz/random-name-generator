var express = require('express');

var randomNameRouter = require('../routes/randomName');

var app = express();

app.use(express.json());

app.use('/random-name', randomNameRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server ready on port 3000."));

module.exports = app;
