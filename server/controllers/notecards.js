var mongoose = require('mongoose')
var Notecard = mongoose.model('Notecard')
var Collection = mongoose.model('Collection')

function notecardController(){
	this.nextcard = function(req,res){
		Collection.findOne({_id: req.params.collid}, function(err,collection){
			if(err){
				res.json(err)
			}
			else{
				for(var i = 0; i < collection._notecards.length; i++){
					if(collection._notecards[i] == req.params.cardid && i == collection._notecards.length - 1){
						res.json({data:null})
					}
					else if(collection._notecards[i] == req.params.cardid){
						res.json({data:collection._notecards[i+1]})
					}
				}
			}
		})
	}
	this.show_card = function(req, res){
		Notecard.findOne({_id: req.params.id}, function(err, notecard){
			if(err){
				res.json(err)
			}
			else {
				res.json(notecard)
			}
		})
	}
	this.pushcard = function(req,res){
		var notecard = Notecard({question : req.body.question, answer : req.body.answer, _collection:req.body._collection})
		notecard.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				Collection.findOne({_id:req.body._collection}, function(err,collection){
					if(err){
						res.json(err)
					}
					else{
						collection._notecards.push(notecard)
						collection.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								res.json(notecard)
							}
						})
					}
				})
			}
		})
	}
	this.pushcardatindex = function(req,res){
		var notecard = Notecard({question : req.body.question, answer : req.body.answer, _collection: req.body._collection})
		notecard.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				Collection.findOne({_id:req.body._collection}, function(err,collection){
					if(err){
						res.json(err)
					}
					else{
						collection._notecards.splice(req.body.index,0,notecard)
						collection.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								res.json(notecard)
							}
						})
					}
				})
			}
		})
	}
	this.editcard = function(req,res){
		Notecard.findOne({_id: req.params.id}, function(err,notecard){
			if(err){
				res.json(err)
			}
			else{
				notecard.question = req.body.question
				notecard.answer = req.body.answer
				notecard.save(function(err){
					if(err){
						res.json(err)
					}
					else{
						res.json(notecard)
					}
				})
			}
		})
	}
	this.removecard = function(req,res){
		Notecard.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err)
			}
			else{
				Collection.findOne({_id: req.body._collection}, function(err,collection){
					if(err){
						res.json(err)
					}
					else{
						for(var i=0; i<collection._notecards.length; i++){
							if(collection._notecards[i] == req.params.id){
								collection._notecards.splice(i,1)
								break;
							}
						}
						collection.save(function(err){
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
	
}

module.exports = new notecardController()
