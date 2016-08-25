var mongoose = require('mongoose')
var Collection = mongoose.model('Collection')
var Subject = mongoose.model('Subject')
var User = mongoose.model('User')

function collectionController(){
	this.getcollection = function(req,res){
		Collection.findOne({_id: req.params.id})
			.populate({path: '_reviews',
				populate:[
					{path: '_user'}
				]
			})
			.populate('_notecards _subject').exec(function(err,collection){
				if(err){
					res.json(err)
				}
				else{
					res.json(collection)
				}
			})
	}
	this.getcollectionsbysub = function(req,res){
		Collection.find({_subject : req.params.sub}, function(err, collections){
			if(err){
				res.json(err)
			}
			else{
				res.json(collections)
			}
		})
	}
	this.getcollectionsbyuser = function(req,res){
		Collection.find({_user : req.params.user}, function(err, collections){
			if(err){
				res.json(err)
			}
			else{
				res.json(collections)
			}
		})
	}
	this.addtotopcollections = function(req,res){
		User.findOne({_user: req.body._user}, function(err,user){
			user._topcollections.push(req.body._collection)
			user.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					res.send()
				}
			})
		})
	}
	this.addcollection = function(req,res){
		var collection = Collection({name: req.body.name, public: req.body.public, description: req.body.description, _user:req.body._user, _subject:req.body._subject})
		console.log(collection);
		collection.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				Subject.findOne({_id: req.body._subject}, function(err, subject){
					if(err){
						res.json(err)
					}
					else{
						subject._collections.push(collection)
						subject.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								User.findOne({_id: req.body._user}, function(err, user){
									if(err){
										res.json(err)
									}
									else{
										user._collections.push(collection)
										user._topcollections.push(collection)
										user.save({validateBeforeSave: false }, function(err){
											if(err){
												res.json(err)
											}
											else{
												res.json(collection)
											}
										})
									}
								})
							}
						})
					}
				})
			}
		})
	}
	this.removecollection = function(req,res){
		Collection.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err)
			}
			else{
				User.findOne({_id: req.body._user}, function(err, user){
					if(err){
						res.json(err)
					}
					else{
						for(var i=0; i<user._collections.length; i++){
							if(user._collections[i] == req.body._collection){
								user._collection.splice(i,1)
								break;
							}
						}
						res.send()
					}
				})
			}
		})
	}
	this.removecollectionfromtop = function(req,res){
		User.findOne({_id: req.body._user}, function(err,user){
			if(err){
				res.json(err)
			}
			else{
				for(var i=0; i<user._topcollections.length; i++){
					if(user._topcollections[i] == req.body._collection){
						user._topcollection.splice(i,1)
						break;
					}
				}
				res.send()
			}
		})
	}
	this.editcollection = function(req,res){
		Collection.findOne({_id: req.params.id}, function(err, collection){
			if(err){
				res.json(err)
			}
			else{
				collection.name = req.body.name;
				collection.description = req.body.description
				collection.public = req.body.public
				collection.save(function(err){
					if(err){
						res.json(err)
					}
					else{
						res.json(collection)
					}
				})
			}
		})
	}
}

module.exports = new collectionController()
