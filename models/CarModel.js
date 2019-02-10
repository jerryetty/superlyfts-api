var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CarSchema = new Schema({
  'driver': {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Driver'
  },

  'licence_plate': {
    type: String,
    required: true
  },
  'model': {
    type: String,
    required: true
  },
  'type': {
    type: String,
    required: true
  },
  'number_of_seats': {
    type: Number,
    required: true
  },
  'insurance_doc': {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Car', CarSchema)
