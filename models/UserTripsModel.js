var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserTripsSchema = new Schema({
	'trip' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Trips'
	},
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'status' : String,
	'fare' : Number,
	'rating' : Number,
	'distance' : Number,
	'start_time' : Date,
	'end_time' : Date,
	'comments' : String
});

module.exports = mongoose.model('UserTrips', UserTripsSchema);
