var UserTripsModel = require('../models/UserTripsModel.js')

/**
 * UserTripsController.js
 *
 * @description :: Server-side logic for managing UserTripss.
 */
module.exports = {

  /**
     * UserTripsController.list()
     */
  list: function (req, res) {
    UserTripsModel.find(function (err, UserTripss) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting UserTrips.',
          error: err
        })
      }
      return res.json(UserTripss)
    })
  },

  /**
     * UserTripsController.show()
     */
  show: function (req, res) {
    var id = req.params.id
    UserTripsModel.findOne({ _id: id }, function (err, UserTrips) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting UserTrips.',
          error: err
        })
      }
      if (!UserTrips) {
        return res.status(404).json({
          message: 'No such UserTrips'
        })
      }
      return res.json(UserTrips)
    })
  },

  /**
     * UserTripsController.create()
     */
  create: function (req, res) {
    var UserTrips = new UserTripsModel({
      trip: req.body.trip,
      user: req.body.user,
      status: 'Pending',
      fare: 0,
      rating: 5.0,
      distance: 0,
      start_time: 0,
      end_time: 0,
      comments: 'No Comments'

    })

    UserTrips.save(function (err, UserTrips) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating UserTrips',
          error: err
        })
      }
      return res.status(201).json(UserTrips)
    })
  },

  /**
     * UserTripsController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    UserTripsModel.findOne({ _id: id }, function (err, UserTrips) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting UserTrips',
          error: err
        })
      }
      if (!UserTrips) {
        return res.status(404).json({
          message: 'No such UserTrips'
        })
      }

      UserTrips.trip = req.body.trip ? req.body.trip : UserTrips.trip
      UserTrips.user = req.body.user ? req.body.user : UserTrips.user
      UserTrips.status = req.body.status ? req.body.status : UserTrips.status
      UserTrips.fare = req.body.fare ? req.body.fare : UserTrips.fare
      UserTrips.rating = req.body.rating ? req.body.rating : UserTrips.rating
      UserTrips.distance = req.body.distance ? req.body.distance : UserTrips.distance
      UserTrips.start_time = req.body.start_time ? req.body.start_time : UserTrips.start_time
      UserTrips.end_time = req.body.end_time ? req.body.end_time : UserTrips.end_time
      UserTrips.comments = req.body.comments ? req.body.comments : UserTrips.comments

      UserTrips.save(function (err, UserTrips) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating UserTrips.',
            error: err
          })
        }

        return res.json(UserTrips)
      })
    })
  },

  /**
     * UserTripsController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    UserTripsModel.findByIdAndRemove(id, function (err, UserTrips) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the UserTrips.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
