var mongoose = require('mongoose');
var User = require('./../controllers/users.js');
var Collection = require('./../controllers/collections.js')
var Subject = require('./../controllers/subject.js');
var Notecard = require('./../controllers/notecard.js');


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
    app.get('/removecollection/:id', Collection.removecollection)
    app.get('/removecollectionfromtop', Collection.removecollectionfromtop)
    app.post('/addsubject', Subject.addsubject)
    app.get('/getsubjects', Subject.getsubjects)
    app.get('/getsubject/:id', Subject.getsubject)
    app.post('/editsubject/:id', Subject.editsubject)
    app.get('/removesubject/:id', Subject.removesubject)
    app.post('/pushcard', Notecard.pushcard)
    app.post('/pushcardatindex',Notecard.pushcardatindex)
    app.post('/editcard/:id', Notecard.editcard)
    app.get('/removecard')
};
