var mongoose = require('mongoose');
var User = require('./../controllers/users.js');
var Collection = require('./../controllers/collections.js')
var Subject = require('./../controllers/subject.js')


module.exports = function(app){
    app.post('/register', User.register);
    app.post('/login', User.login);
    app.get('/getuser', User.getuser)
    app.get('/getcollection/:id', Collection.getcollection)
    app.get('/getcollectionsbysub/:sub', Collection.getcollectionsbysub)
    app.get('/getcollectionsbyuser/:user', Collection.getcollectionsbyuser)
    app.get('/addtotopcollections', Collection.addtotopcollections)
    app.post('/addcollection', Collection.addcollection)
    app.post('/editcollection/:id', Collection.editdescription)
    app.get('/removecollection', Collection.removecollection)
    app.get('/removecollectionfromtop', Collection.removecollectionfromtop)

};
