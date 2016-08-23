var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');

module.exports = (function(app){
    app.get('/users', Users.index);
    app.post('/register', Users.register);
    app.post('/login', Users.login);


});
