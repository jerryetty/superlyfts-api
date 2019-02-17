var BookingModel = require('../models/BookingModel.js')

/**
 * BookingController.js
 *
 * @description :: Server-side logic for managing Bookings.
 */
module.exports = {

  /**
     * BookingController.list()
     */
  list: function (req, res) {
    BookingModel.find({})
      .exec(function (err, Bookings) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting Booking.',
            error: err
          })
        }
        return res.json(Bookings)
      })
  },

  /**
     * BookingController.show()
     */
  show: function (req, res) {
    var id = req.params.id
    BookingModel.findOne({ _id: id }, function (err, Booking) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Booking.',
          error: err
        })
      }
      if (!Booking) {
        return res.status(404).json({
          message: 'No such Booking'
        })
      }
      return res.json(Booking)
    })
  },

  /**
     * BookingController.create()
     */
  create: function (req, res, next) {
    BookingModel.findOne({ user: req.body.user, trip: req.body.trip })
      .exec(function (err, duplicateBooking) {
        if (err) {
          return next(err)
        }
        if (duplicateBooking) {
          return res.status(409).json({ Message: 'You have already booked this trip' })
        } else {
          var Booking = new BookingModel({
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

          Booking.save(function (err, Booking) {
            if (err) {
              return res.status(500).json({
                message: 'Error when creating Booking',
                error: err
              })
            }
            var Response = {
              trip: { tripId: Booking.trip },
              user: { userId: Booking.user },
              status: 'Pending',
              fare: 0,
              rating: 5.0,
              distance: 0,
              start_time: 0,
              end_time: 0,
              comments: 'No Comments'
            }
            return res.status(201).json(Response)
          })
        }
      })
  },

  /**
     * BookingController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    BookingModel.findOne({ _id: id }, function (err, Booking) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Booking',
          error: err
        })
      }
      if (!Booking) {
        return res.status(404).json({
          message: 'No such Booking'
        })
      }

      Booking.trip = req.body.trip ? req.body.trip : Booking.trip
      Booking.user = req.body.user ? req.body.user : Booking.user
      Booking.status = req.body.status ? req.body.status : Booking.status
      Booking.fare = req.body.fare ? req.body.fare : Booking.fare
      Booking.rating = req.body.rating ? req.body.rating : Booking.rating
      Booking.distance = req.body.distance ? req.body.distance : Booking.distance
      Booking.start_time = req.body.start_time ? req.body.start_time : Booking.start_time
      Booking.end_time = req.body.end_time ? req.body.end_time : Booking.end_time
      Booking.comments = req.body.comments ? req.body.comments : Booking.comments

      Booking.save(function (err, Booking) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Booking.',
            error: err
          })
        }

        return res.json(Booking)
      })
    })
  },

  /**
     * BookingController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    BookingModel.findByIdAndRemove(id, function (err, Booking) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Booking.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
