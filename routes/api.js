var express = require('express')
var router = express.Router()
var Index = require('../controllers/index.js')
var CarController = require('../controllers/CarController.js')
var DriverController = require('../controllers/DriverController.js')
var TripController = require('../controllers/TripController.js')
var UserController = require('../controllers/UserController.js')
var WalletController = require('../controllers/WalletController.js')
var BookingController = require('../controllers/BookingController.js')

/* GET home page. */
router.get('/', Index.index)

/** **********
 * Car Routes
 *
 * GET all cars
 */
router.get('/car/', CarController.list)

/*
 * GET single car
 */
router.get('/car/:id', CarController.show)

/*
 * POST car
 */
router.post('/car/', CarController.create)

/*
 * PUT car
 */
router.put('/car/:id', CarController.update)

/*
 * DELETE car
 */
router.delete('/car/:id', CarController.remove)

/** **********
 * Driver Routes
 *
 * GET all drivers
 */
router.get('/driver/', DriverController.list)

/*
 * GET single driver
 */
router.get('/driver/:id', DriverController.show)

/*
 * POST driver
 */
router.post('/driver/', DriverController.create)

/*
 * PUT driver
 */
router.put('/driver/:id', DriverController.update)

/*
 * DELETE driver
 */
router.delete('/driver/:id', DriverController.remove)

/** **********
 * Trip Routes'
 *
 * GET all trips
 */
router.get('/trip/', TripController.list)

/*
 * GET single trip
 */
router.get('/trip/:id', TripController.show)

/*
 * POST trip
 */
router.post('/trip/', TripController.create)

/*
 * PUT trip
 */
router.put('/trip/:id', TripController.update)

/*
 * DELETE trip
 */
router.delete('/trip/:id', TripController.remove)

/** **********
 * User Routes'
 *
 * GET all users
 */
router.get('/user/', UserController.list)

/*
 * GET single user
 */
router.get('/user/:id', UserController.getByID)

/*
 * GET user by googleId
 */
router.get('/user/gid/:googleId', UserController.getByGoogleId)

/*
 * GET user wallet
 */
router.get('/user/:user_id/wallet', WalletController.list)

/*
 * GET user trips
 */
router.get('/user/:user_id/trips', UserController.trips)

/*
 * GET Check if User is Driver
 */
router.get('/user/:user_id/isDriver', UserController.isDriver)

/*
 * POST user
 */
router.post('/user/', UserController.create)

/*
 * POST user wallet
 */
router.post('/user/:user_id/wallet', WalletController.create)

/*
 * PUT user
 */
router.put('/user/:id', UserController.update)

/*
 * DELETE user
 */
router.delete('/user/:id', UserController.remove)

/** **********
 * Wallet Routes'
 *
 * GET all wallets
 */
router.get('/wallet/', WalletController.list)

/*
 * POST wallet
 */
router.post('/wallet/', WalletController.create)

/*
 * PUT wallet
 */
router.put('/wallet/:id', WalletController.update)

/*
 * DELETE wallet
 */
router.delete('/wallet/:id', WalletController.remove)

/*
 * GET
 */
router.get('/book/', BookingController.list)

/*
 * GET
 */
router.get('/book/:id', BookingController.show)

/*
 * POST
 */
router.post('/book/', BookingController.create)

/*
 * PUT
 */
router.put('/book/:id', BookingController.update)

/*
 * DELETE
 */
router.delete('/book/:id', BookingController.remove)

module.exports = router
