var CarModel = require('../models/CarModel.js')

/**
 * CarController.js
 *
 * @description :: Server-side logic for managing Cars.
 */
module.exports = {

  /**
     * CarController.list()
     */
  list: function (req, res) {
    CarModel.find(function (err, Cars) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Car.',
          error: err
        })
      }
      return res.json(Cars)
    })
  },

  /**
     * CarController.show()
     */
  show: function (req, res) {
    var id = req.params.id
    CarModel.findOne({ _id: id }, function (err, Car) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Car.',
          error: err
        })
      }
      if (!Car) {
        return res.status(404).json({
          message: 'No such Car'
        })
      }
      return res.json(Car)
    })
  },

  /**
     * CarController.create()
     */
  create: function (req, res) {
    var Car = new CarModel({
      driver: req.body.driver,
      licence_plate: req.body.licence_plate,
      model: req.body.model,
      type: req.body.type,
      number_of_seats: req.body.number_of_seats,
      insurance_doc: req.body.insurance_doc

    })

    Car.save(function (err, Car) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Car',
          error: err
        })
      }
      var response = {
        driver: { id: Car.driver },
        licence_plate: Car.licence_plate,
        model: Car.model,
        type: Car.type,
        number_of_seats: Car.number_of_seats,
        insurance_doc: Car.insurance_doc

      }
      return res.status(201).json(response)
    })
  },

  /**
     * CarController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    CarModel.findOne({ _id: id }, function (err, Car) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Car',
          error: err
        })
      }
      if (!Car) {
        return res.status(404).json({
          message: 'No such Car'
        })
      }

      Car.driver = req.body.driver ? req.body.driver : Car.driver
      Car.licence_plate = req.body.licence_plate ? req.body.licence_plate : Car.licence_plate
      Car.model = req.body.model ? req.body.model : Car.model
      Car.type = req.body.type ? req.body.type : Car.type
      Car.number_of_seats = req.body.number_of_seats ? req.body.number_of_seats : Car.number_of_seats
      Car.insurance_doc = req.body.insurance_doc ? req.body.insurance_doc : Car.insurance_doc

      Car.save(function (err, Car) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Car.',
            error: err
          })
        }

        return res.json(Car)
      })
    })
  },

  /**
     * CarController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    CarModel.findByIdAndRemove(id, function (err, Car) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Car.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
