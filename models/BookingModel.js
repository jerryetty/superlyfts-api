var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BookingSchema = new Schema({
  'trip': {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  'user': {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  'status': String,
  'fare': Number,
  'rating': Number,
  'distance': Number,
  'start_time': Date,
  'end_time': Date,
  'comments': String
})

module.exports = mongoose.model('Booking', BookingSchema)
