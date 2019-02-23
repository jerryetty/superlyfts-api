var express = require('express')
var router = express.Router()
var Index = require('../controllers/index.js')
var CarController = require('../controllers/CarController.js')
var DriverController = require('../controllers/DriverController.js')
var TripController = require('../controllers/TripController.js')
var UserController = require('../controllers/UserController.js')
var WalletController = require('../controllers/WalletController.js')
var BookingController = require('../controllers/BookingController.js')

// GET home page.
router.get('/', Index.index)

// Car Routes

router.get('/car/', CarController.list)
router.get('/car/:id', CarController.show)
router.post('/car/', CarController.create)
router.put('/car/:id', CarController.update)
router.delete('/car/:id', CarController.remove)

// Driver Routes
router.get('/driver/', DriverController.list)
router.get('/driver/:id', DriverController.show)
router.get('/driver/:id/cars', DriverController.getCars)
router.post('/driver/', DriverController.create)
router.put('/driver/:id', DriverController.update)
router.delete('/driver/:id', DriverController.remove)

// Trip Routes
router.get('/trip/', TripController.list)
router.get('/trip/:id', TripController.show)
router.post('/trip/', TripController.create)
router.put('/trip/:id', TripController.update)
router.delete('/trip/:id', TripController.remove)

// User Routes
router.get('/user/', UserController.list)
router.get('/user/:id', UserController.getByID)
router.get('/user/gid/:googleId', UserController.getByGoogleId)
router.get('/user/:user_id/wallet', WalletController.list)
router.get('/user/:user_id/trips', UserController.trips)
router.get('/user/:user_id/isDriver', UserController.isDriver)
router.post('/user/', UserController.create)
router.post('/user/:user_id/wallet', WalletController.create)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.remove)

// Wallet Routes
router.get('/wallet/', WalletController.list)
router.post('/wallet/', WalletController.create)
router.put('/wallet/:id', WalletController.update)
router.delete('/wallet/:id', WalletController.remove)

// Booing Routes
router.get('/book/', BookingController.list)
router.get('/book/:id', BookingController.show)
router.post('/book/', BookingController.create)
router.put('/book/:id', BookingController.update)
router.delete('/book/:id', BookingController.remove)

module.exports = router
