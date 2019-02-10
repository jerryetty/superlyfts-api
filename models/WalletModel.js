var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WalletSchema = new Schema({
  'user': {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  'balance': {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Wallet', WalletSchema)
