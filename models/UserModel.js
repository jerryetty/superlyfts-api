var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  'name': {
    type: String,
    required: true
  },
  'email': {
    type: String,
    required: true
  },
  'telephone': {
    type: String,
    required: false
  },
  'googleID': {
    type: String,
    required: true
  },
  'id_number': {
    type: String,
    required: false
  },
  'next_of_kin_name': {
    type: String,
    required: false
  },
  'next_of_kin_tel': {
    type: String,
    required: false
  },
  'avatar': {
    type: String,
    required: false
  },
  'active': {
    type: Boolean,
    required: false
  },
  'gender': {
    type: String,
    required: false
  },
  'date_joined': {
    type: Date,
    required: false
  },
  'rating': {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model('User', UserSchema)
