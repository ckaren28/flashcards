var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
	rating: {
		type: Number,
		enum: [1,2,3,4,5]
	},
	review: {
		type: String,
		maxlength: [300, 'Your review cannot excede 300 characters']
	},
	_user : {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	_collection: {
		type: Schema.Types.ObjectId, ref: 'Collection'
	}

},{timestamps:true})