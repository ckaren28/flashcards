var mongoose = require('mongoose')
var User = mongoose.model('User')
var Subject = mongoose.model('Subject')

function subjectController(){
	this.getsubject = function(req, res){
		Subject.findOne({_id:req.params.id})
			.populate('_user _collections').exec(function(err,subject){
				if(err){
					res.json(err)
				}
				else{
					res.json(subject)
				}
			})
	}
	this.getsubjects = function(req,res){
		Subject.find({}, function(err,subjects){
			if(err){
				res.json(err)
			}
			else{
				res.json(subjects)
			}
		})
	}
	this.addsubject = function(req, res){
		var subject = Subject({ name: req.body.name, description: req.body.description, _user : req.body._user})
		subject.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				User.findOne({_id: req.body._user}, function(err,user){
					if(err){
						res.json(err)
					}
					else{
						user._subjects.push(subject)
						user.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								res.send()
							}
						})
					}
				})
			}
		})
	}
	this.editsubject = function(req,res){
		Subject.findOne({_id: req.params.id}, function(err,subject){
			if(err){
				res.json(err)
			}
			else{
				subject.name = req.body.name;
				subject.description = req.body.description;
				subject.save(function(err){
					res.json(subject)
				})
			}
		})
	}
	this.removesubject = function(req,res){
		Subject.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err)
			}
			else{
				User.findOne({_id: req.body._user}, function(err, user){
					if(err){
						res.json(err)
					}
					else{
						for(var i=0; i<user._subjects.length; i++){
							if(user._subjects[i] == req.params.id){
							user._subjects.splice(i,1)
							}
						}
					}
				})
			}
		})
	}
}

module.exports = new subjectController()