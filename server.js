var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');


app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log('listening on port 8000');
});
