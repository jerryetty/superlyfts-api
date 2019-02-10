var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DriverSchema = new Schema({
  'user': {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  'active': {
    type: Boolean,
    required: true
  },
  'rating': {
    type: Number,
    required: true
  },
  'driving_permit_number': {
    type: String,
    required: true
  },
  'driving_permit_photo': {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Driver', DriverSchema)
