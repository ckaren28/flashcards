var mongoose = require('mongoose');
var User = require('./../controllers/users.js');
var Collection = require('./../controllers/collections.js')
var Subject = require('./../controllers/subjects.js');
var Notecard = require('./../controllers/notecards.js');
var Review = require('./../controllers/reviews.js')


module.exports = function(app){
	//need to pass username as req.body.username, email as req.body.email, password as req.body.password, confirm_pw as req.body.confirm_pw // will get user back
    app.post('/register', User.register);
    //need to pass username as req.body.username // will get user back
    app.post('/login', User.login);
    //need to pass user id as req.body._id, get id from cookied user // will get user topcollections, subject back
    app.get('/getuser/:id', User.getuser)
    //need to pass collection id as param id // will get collection back with reviews, notecards and subject info
    app.get('/getcollection/:id', Collection.getcollection)
    //need to pass subject id as param sub // will get collections back based on subject
    app.get('/getcollectionsbysub/:sub', Collection.getcollectionsbysub)
    //need to pass userid as param user // will get collections back based on user
    app.get('/getcollectionsbyuser/:user', Collection.getcollectionsbyuser)
    //will return all collections that are public
    app.get('/getcollections', Collection.getcollections)
    //need to pass userid as req.body._user, collection id as req.body._collection// will push collection into user top collection array// will return nothing
    app.post('/addtotopcollections', Collection.addtotopcollections)
    //need to pass name as req.body.name, public as req.body.public, description as req.body.description, userid as req.body._user, categoryid as req.body._category// will add //will return nothing
    app.post('/addcollection', Collection.addcollection)
    //need to pass collection id as req.params.id, userid as req.body._user // will remove collection completely from database// will return nothing
    app.post('/removecollection/:id', Collection.removecollection)
    //need to pass userid of cookied user as req.body._user // will remove colleciton from topcolleciton// will return nothing
    app.post('/removecollectionfromtop', Collection.removecollectionfromtop)
    //need to pass collection id as param id, need to pass name as req.body.name, description as req.body.description, public as req.body.public // will return edited collection
    app.post('/editcollection/:id', Collection.editcollection)
    //need to pass subect id as param id // will  return subect with populated user and collecitons info
    app.get('/shufflecollection/:id', Collection.shufflecollection)
    app.get('/getsubject/:id', Subject.getsubject)
    //no need to pass anything // will return all subjects
    app.get('/getsubjects', Subject.getsubjects)
    //need to pass name as req.body.name, description as req.body.description, userid from cookied user as req.body._user// will return nothing
    app.post('/addsubject', Subject.addsubject)
    //need to pass subject id as param id// need to pass name as req.body.name, description as req.body.description // will return edited subject
    app.post('/editsubject/:id', Subject.editsubject)
    //need to pass subject id as param id// pass subect user as req.body._user// will remove subject id // will return nothing
    app.get('/removesubject/:id', Subject.removesubject)
    //need to pass collection id and card id as params, will return the next card in the array or null if at the end of the array
    app.get('/nextcard/:collid/:cardid', Notecard.nextcard)
    //need to pass collection id and card id as params, will return the previous card in the array or null if at the beginning of the array
    app.get('/lastcard/:collid/:cardid', Notecard.lastcard)
    //need to pass question as req.body.question, answer as req.body.answer, need to pass collection id as req.body._collection // will return notecard
    app.post('/pushcard', Notecard.pushcard)
    //need to pass question as req.body.question, answer as req.body.answer, need to pass collection id as req.body._collection // will return notecard
    app.post('/pushcardatindex',Notecard.pushcardatindex)
 	// need to pass previous card id as req.body.index, question as req.body.question, answer as req.body.answer, collection id as req.body._collection// will return notecard
    app.get('/showcard/:id', Notecard.show_card)
    //need to pass notecard id as params id, question as req.body.question, answer as req.body.answer// will return notecard
    app.post('/editcard/:id', Notecard.editcard)
    //need to pass notecard id as params, collection id as req.body._collection // will remove notecard from list will return nothing
    app.post('/removecard/:id', Notecard.removecard)
    //need to pass review id as param id,
    app.get('/getreview/:id', Review.getreview)
    //need to pass rating as req.body.rating, review as req.body.review, user id as req.body._user, collection id as req.body._collection// will return review
    app.post('/addreview', Review.addreview)
    // need to pass review id as param id, pass rating as req.body.rating, review as req.body.review// will return review
    app.post('/editreview/:id', Review.editreview)
    //need to pass review id as param id, pass user id as req.body._user, collection id as req.body._collection// will return nothing
    app.get('/deletereview/:id', Review.deletereview)

};
