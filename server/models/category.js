var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: [25,"Your category name must be shorter than 26 characters"],
		required: [true, "Your category name is required"]
	},
	description: {
		type: String,
		maxlength: [100, "Your description can only be 100 characters long"]
	},
	_user: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	_collections: [{
		type: Schema.Types.ObjectId, ref: 'Collection'
	}]

}, {timestamps:true})
var Category = mongoose.model('Category', CategorySchema)