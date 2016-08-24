var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Your collection name is required'],
		maxlength:[25, 'Your collection name cannot excede 25 characters']
	},
	public: {
		type: Boolean,
	},
	description: {
		type: String,
		maxlength:[100, 'Your collection description cannot excede 100 characters']
	},
	_notecards: [{
		type: Schema.Types.ObjectId, ref: 'Notecard'
	}],
	_subject: {
		type: Schema.Types.ObjectId, ref: 'Category'
	},
	_user: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	_reviews: [{
		type: Schema.Types.ObjectId, ref: 'Review'
	}]
}, {timestamps: true})

var Collection = mongoose.model('Collection', CollectionSchema)