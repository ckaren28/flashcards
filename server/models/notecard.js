var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotecardSchema = new mongoose.Schema({
	question: {
		type: String,
		maxlength: [150, 'Your question cannot be longer than 150 characters']
	},
	answer: {
		type: String,
		maxlength: [150, 'Your question cannot be longer than 150 characters']
	},
	_collection: {
		type: Schema.Types.ObjectId, ref: 'Collection'
	}
}, {timestamps:true})
var Notecard = mongoose.model('Notecard', NotecardSchema)