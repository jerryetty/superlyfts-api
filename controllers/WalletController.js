var WalletModel = require('../models/WalletModel.js')

/**
 * WalletController.js
 *
 * @description :: Server-side logic for managing Wallets.
 */
module.exports = {

  /**
     * WalletController.list()
     */
  list: function (req, res) {
    var userID = req.params.user_id
    WalletModel.find({ user: userID })
      .exec(function (err, Wallets) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting Wallet.',
            error: err
          })
        }
        return res.json(Wallets)
      })
  },

  /**
     * WalletController.create()
     */
  create: function (req, res, next) {
    var userID = req.params.user_id
    WalletModel.findOne({ user: userID })
      .exec(function (err, foundWallet) {
        if (err) { return next(err) }
        if (foundWallet) { return res.status(201).json({ Message: 'User already has wallet' }) } else {
          var Wallet = new WalletModel({
            user: userID,
            balance: 0
          })

          Wallet.save(function (err, Wallet) {
            if (err) {
              return res.status(500).json({
                message: 'Error when creating Wallet',
                error: err
              })
            }
            return res.status(201).json(Wallet)
          })
        }
      })
  },

  /**
     * WalletController.update()
     */
  update: function (req, res) {
    var userID = req.params.user_id
    WalletModel.findOne({ user: userID }, function (err, Wallet) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Wallet',
          error: err
        })
      }
      if (!Wallet) {
        return res.status(404).json({
          message: 'No such Wallet'
        })
      }

      Wallet.user = req.body.user ? req.body.user : Wallet.user
      Wallet.balance = req.body.balance ? req.body.balance : Wallet.balance

      Wallet.save(function (err, Wallet) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Wallet.',
            error: err
          })
        }

        return res.json(Wallet)
      })
    })
  },

  /**
     * WalletController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    WalletModel.findByIdAndRemove(id, function (err, Wallet) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Wallet.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
