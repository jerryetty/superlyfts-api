var TripModel = require('../models/TripModel.js')

/**
 * TripController.js
 *
 * @description :: Server-side logic for managing Trips.
 */
module.exports = {

  /**
     * List all trips
     */
  list: function (req, res) {
    if (req.param('destination') == null) {
      TripModel.find({})
        .populate({
          path: 'car',
          populate: {
            path: 'driver',
            select: ['user', 'rating'],
            populate: {
              path: 'user',
              select: ['name']
            }
          }
        })
        .exec(function (err, Trips) {
          if (err) {
            return res.status(500).json({
              message: 'Error when getting Trip.',
              error: err
            })
          }
          return res.json(Trips)
        })
    } else {
      TripModel.find({ destination: req.param('destination') })
        .populate({
          path: 'car',
          populate: {
            path: 'driver',
            select: ['user', 'rating'],
            populate: {
              path: 'user',
              select: ['name']
            }
          }
        })
        .exec(function (err, Trips) {
          if (err) {
            return res.status(500).json({
              message: 'Error when getting Trip.',
              error: err
            })
          }

          if (!Trips.length) {
            return res.status(404).json({
              message: 'No trips to that destination'
            })
          }

          return res.json(Trips)
        })
    }
  },

  /**
     * List trip by ID
     */
  show: function (req, res) {
    var id = req.params.id
    TripModel.findOne({ _id: id }, function (err, Trip) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Trip.',
          error: err
        })
      }
      if (!Trip) {
        return res.status(404).json({
          message: 'No such Trip'
        })
      }
      return res.json(Trip)
    })
  },

  /**
     * Create Trip
     */
  create: function (req, res) {
    var Trip = new TripModel({
      date: req.body.date,
      origin: req.body.origin,
      destination: req.body.destination,
      available_seats: req.body.available_seats,
      luggage: req.body.luggage,
      constraints: req.body.constraints,
      car: req.body.car

    })

    Trip.save(function (err, Trip) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Trip',
          error: err
        })
      }
      var response = {
        date: Trip.date,
        origin: Trip.origin,
        destination: Trip.destination,
        available_seats: Trip.available_seats,
        luggage: Trip.luggage,
        constraints: Trip.constraints,
        car: { id: Trip.car }
      }
      return res.status(201).json(response)
    })
  },

  /**
     * Update Trip
     */
  update: function (req, res) {
    var id = req.params.id
    TripModel.findOne({ _id: id }, function (err, Trip) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Trip',
          error: err
        })
      }
      if (!Trip) {
        return res.status(404).json({
          message: 'No such Trip'
        })
      }

      Trip.date = req.body.date ? req.body.date : Trip.date
      Trip.origin = req.body.origin ? req.body.origin : Trip.origin
      Trip.destination = req.body.destination ? req.body.destination : Trip.destination
      Trip.available_seats = req.body.available_seats ? req.body.available_seats : Trip.available_seats
      Trip.luggage = req.body.luggage ? req.body.luggage : Trip.luggage
      Trip.constraints = req.body.constraints ? req.body.constraints : Trip.constraints
      Trip.car = req.body.car ? req.body.car : Trip.car

      Trip.save(function (err, Trip) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Trip.',
            error: err
          })
        }

        return res.json(Trip)
      })
    })
  },

  /**
     * Remove trip
     */
  remove: function (req, res) {
    var id = req.params.id
    TripModel.findByIdAndRemove(id, function (err, Trip) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Trip.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
