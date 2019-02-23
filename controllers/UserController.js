var UserModel = require('../models/UserModel.js')
var DriverModel = require('../models/DriverModel')
// var TripModel = require('../models/TripModel')
var BookingModel = require('../models/BookingModel')
/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

  // Check if User is a Driver

  isDriver: function (req, res, next) {
    var userID = req.params.user_id
    DriverModel.findOne({ user: userID })
      .select('id')
      .exec(function (err, Driver) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting User.',
            error: err
          })
        }
        if (Driver) {
          return res.status(200).json(Driver)
        } else {
          return res.status(404).json({ isDriver: false, Message: 'User is not a driver' })
        }
      })
  },

  /**
   * Get User Trips
  */
  trips: function (req, res, next) {
    var id = req.params.user_id
    var status = req.param('status')
    BookingModel.find({ user: id, status: status })
      .populate({
        path: 'user',
        select: ['name']
      })
      .populate({
        path: 'trip',
        populate: {
          path: 'car',
          populate: {
            path: 'driver',
            select: ['user', 'rating'],
            populate: {
              path: 'user',
              select: ['name']
            }
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
            message: 'You have not booked any trips'
          })
        }

        return res.json(Trips)
      })
  },

  /**
     * UserController.list()
     */
  list: function (req, res) {
    UserModel.find({})
      .exec(function (err, Users) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting User.',
            error: err
          })
        }
        return res.json(Users)
      })
  },

  // Get User by ID
  getByID: function (req, res) {
    var id = req.params.id
    UserModel.findOne({ _id: id }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        })
      }
      if (!User) {
        return res.status(404).json({
          message: 'No such User'
        })
      }
      return res.json(User)
    })
  },

  // Get User by GoogleID
  getByGoogleId: function (req, res) {
    var googleId = req.params.googleId
    UserModel.findOne({ googleID: googleId }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        })
      }
      if (!User) {
        return res.status(404).json({
          message: 'No such User'
        })
      }
      return res.json(User)
    })
  },

  /**
     * UserController.create()
     */
  create: function (req, res, next) {
    UserModel.findOne({ googleID: req.body.googleID })
      .exec(function (err, foundUser) {
        if (err) { return next(err) }
        if (foundUser) { return res.status(201).json({ Message: 'User exists' }) } else {
          var User = new UserModel({
            name: req.body.name,
            email: req.body.email,
            telephone: req.body.telephone,
            googleID: req.body.googleID,
            id_number: req.body.id_number,
            next_of_kin_name: req.body.next_of_kin_name,
            next_of_kin_tel: req.body.next_of_kin_tel,
            avatar: req.body.avatar,
            active: req.body.active,
            gender: req.body.gender,
            date_joined: req.body.date_joined,
            rating: req.body.rating
          })

          User.save(function (err, User) {
            if (err) {
              return res.status(500).json({
                message: 'Error when creating User',
                error: err
              })
            }
            return res.status(201).json(User)
          })
        }
      })
  },

  /**
     * UserController.update()
     */
  update: function (req, res) {
    var id = req.params.id
    UserModel.findOne({ _id: id }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User',
          error: err
        })
      }
      if (!User) {
        return res.status(404).json({
          message: 'No such User'
        })
      }

      User.name = req.body.name ? req.body.name : User.name
      User.email = req.body.email ? req.body.email : User.email
      User.telephone = req.body.telephone ? req.body.telephone : User.telephone
      User.googleID = req.body.googleID ? req.body.googleID : User.googleID
      User.id_number = req.body.id_number ? req.body.id_number : User.id_number
      User.next_of_kin_name = req.body.next_of_kin_name ? req.body.next_of_kin_name : User.next_of_kin_name
      User.next_of_kin_tel = req.body.next_of_kin_tel ? req.body.next_of_kin_tel : User.next_of_kin_tel
      User.avatar = req.body.avatar ? req.body.avatar : User.avatar
      User.active = req.body.active ? req.body.active : User.active
      User.gender = req.body.gender ? req.body.gender : User.gender
      User.date_joined = req.body.date_joined ? req.body.date_joined : User.date_joined
      User.rating = req.body.rating ? req.body.rating : User.rating

      User.save(function (err, User) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating User.',
            error: err
          })
        }

        return res.json(User)
      })
    })
  },

  /**
     * UserController.remove()
     */
  remove: function (req, res) {
    var id = req.params.id
    UserModel.findByIdAndRemove(id, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the User.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
