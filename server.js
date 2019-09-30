const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname + "/client")));

app.listen(PORT, function () {
    console.log("You are now listening to port " + PORT + ".");
});