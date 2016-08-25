var mongoose = require('mongoose')
var Review = mongoose.model('Review')

function reviewController(){
	this.getreview = function(req,res){
		Review.findOne({_id: req.params._id})
			.populate('_user').exec(function(err,review){
				if(err){
					res.json(err)
				}
				else{
					res.json(review)
				}
			})
	}
	this.addreview = function(req,res){
		var review = Review({rating: req.body.rating, review: req.body.review, _user: req.body._user, _colleciton: req.body._collection})
		review.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				Collection.findOne({_id: req.body._collection}, function(err, collection){
					if(err){
						res.json(err)
					}
					else{
						collection._reviews.push(review)
						collection.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								User.findOne({_id:req.body._user}, function(err,user){
									user._reviews.push(review)
									user.save(function(err){
										if(err){
											res.json(err)
										}
										else{
											res.json(review)
										}
									})
								})
							}
						})
					}
				})
			}
		})
	}
	this.editreview = function(req,res){
		Review.findOne({_id: req.params.id}, function(err, review){
			if(err){
				res.json(err)
			}
			else{
				review.rating = req.body.rating
				review.review = req.body.review
				review.save(function(err){
					if(err){
						res.json(err)
					}
					else{
						res.json(review)
					}
				})
			}
		})
	}
	this.deletereview = function(req,res){
		Review.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err)
			}
			else{
				User.findOne({_id:req.body._user}, function(err, user){
					if(err){
						res.json(err)
					}
					else{
						for(var i = 0; i < user._reviews.length; i++){
							if(user._reviews[i] == req.params.id){
								user._reviews.splice(i,1)
								break;
							}
						}
						user.save(function(err){
							if(err){
								res.json(err)
							}
							else{
								Collection.findOne({_id: req.body._collection}, function(err, collection){
									if(err){
										res.json(err)
									}
									else{
										for(var i = 0; i < colleciton._reviews.length; i++){
											if(collection._reviews[i] == req.params.id){
												collection._reviews.splice(i,1)
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
				})
			}
		})
	}

}

module.exports = new reviewController()