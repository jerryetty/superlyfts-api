var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DriverSchema = new Schema({
  'user': {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  'active': {
    type: Boolean,
    required: false,
    default: false
  },
  'rating': {
    type: Number,
    required: false,
    default: 5
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
