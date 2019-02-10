var express = require('express');
var router = express.Router();
var UserTripsController = require('../controllers/UserTripsController.js');

/*
 * GET
 */
router.get('/', UserTripsController.list);

/*
 * GET
 */
router.get('/:id', UserTripsController.show);

/*
 * POST
 */
router.post('/', UserTripsController.create);

/*
 * PUT
 */
router.put('/:id', UserTripsController.update);

/*
 * DELETE
 */
router.delete('/:id', UserTripsController.remove);

module.exports = router;
