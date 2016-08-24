var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	username : {
		type: String,
		required: [true, 'Your username is required'],
		unique:true,
		minlength: [4, 'Your username must be at least four characters']
		maxlength: [20, 'Your username must be shorter than 21 characters' ]
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Your email is required'],
		unique: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, 'Your password is required'],
		minlength: [8, 'Your password must be at least 8 characters'],
		maxlength: [32, 'Your password must be at least 32 characters'],
		trim: true,
		match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/, 'Please include at least one uppercase letter, one lowercase letter and one number in your password'],
		validate: {
			validator: function(value){
				var patt = new RegExp(value)
				return patt.test(this.confirm_pw)
			},
			message: "Password and confirm password fields must match"
		}
	},
	confirm_pw: {
		type: String,
		required: [true, "Your confirm password field is required"]
	},
	_reviews: [{
		type: Schema.Types.ObjectId, ref: 'Review' 
	}],
	_collections: [{
		type: Schema.Types.ObjectId, ref: 'Collection'
	}]
	_topcollections: [{
		type: Schema.Types.ObjectId, ref: 'Collection'
	}],
	_subjects: [{
		type: Schema.Types.ObjectId, ref: 'Subject' 
	}]
}, {timestamps:true})

UserSchema.pre('save', function(done){
  	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  	this.confirm_pw = '';
  	done()
});

var User = mongoose.model('User', UserSchema)


	