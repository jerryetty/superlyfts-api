var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TripSchema = new Schema({
  'date': {
    type: Date,
    required: true
  },
  'origin': {
    type: String,
    required: true
  },
  'destination': {
    type: String,
    required: true
  },
  'available_seats': {
    type: Number,
    required: true
  },
  'luggage': {
    type: Boolean,
    required: true
  },
  'constraints': {
    type: String,
    required: true
  },
  'car': {
    type: Schema.Types.ObjectId,
    ref: 'Car'
  }
})

module.exports = mongoose.model('Trip', TripSchema)
