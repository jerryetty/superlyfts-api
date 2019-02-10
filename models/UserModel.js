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
    required: true
  },
  'googleID': {
    type: String,
    required: true
  },
  'id_number': {
    type: String,
    required: true
  },
  'next_of_kin_name': {
    type: String,
    required: true
  },
  'next_of_kin_tel': {
    type: String,
    required: true
  },
  'avatar': {
    type: String,
    required: true
  },
  'active': {
    type: Boolean,
    required: true
  },
  'gender': {
    type: String,
    required: true
  },
  'date_joined': {
    type: Date,
    required: true
  },
  'rating': {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
