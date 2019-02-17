var DriverModel = require('../models/DriverModel.js')

/**
 * DriverController.js
 *
 * @description :: Server-side logic for managing Drivers.
 */
module.exports = {

  /**
     * DriverController.list()
     */
  list: function (req, res) {
    DriverModel.find(function (err, Drivers) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Driver.',
          error: err
        })
      }
      return res.json(Drivers)
    })
  },

  /**
     * DriverController.show()
     */
  show: function (req, res) {
    var id = req.params.id
    DriverModel.findOne({ _id: id }, function (err, Driver) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Driver.',
          error: err
        })
      }
      if (!Driver) {
        return res.status(404).json({
          message: 'No such Driver'
        })
      }
      return res.json(Driver)
    })
  },

  /**
     * DriverController.create()
     */
  create: function (req, res) {
    var Driver = new DriverModel({
      user: req.body.user,
      active: req.body.active,
      rating: req.body.rating,
      driving_permit_number: req.body.driving_permit_number,
      driving_permit_photo: req.body.driving_permit_photo

    })

    Driver.save(function (err, Driver) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Driver',
          error: err
        })
      }
      var response = {
        user: { id: Driver.user },
        active: Driver.active,
        rating: Driver.rating,
        driving_permit_number: Driver.driving_permit_number,
        driving_permit_photo: Driver.driving_permit_photo
      }
      return res.status(201).json(response)
    })
  },

  /**
     * DriverController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    DriverModel.findOne({ _id: id }, function (err, Driver) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Driver',
          error: err
        })
      }
      if (!Driver) {
        return res.status(404).json({
          message: 'No such Driver'
        })
      }

      Driver.user = req.body.user ? req.body.user : Driver.user
      Driver.active = req.body.active ? req.body.active : Driver.active
      Driver.rating = req.body.rating ? req.body.rating : Driver.rating
      Driver.driving_permit_number = req.body.driving_permit_number ? req.body.driving_permit_number : Driver.driving_permit_number
      Driver.driving_permit_photo = req.body.driving_permit_photo ? req.body.driving_permit_photo : Driver.driving_permit_photo

      Driver.save(function (err, Driver) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Driver.',
            error: err
          })
        }

        return res.json(Driver)
      })
    })
  },

  /**
     * DriverController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    DriverModel.findByIdAndRemove(id, function (err, Driver) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Driver.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
