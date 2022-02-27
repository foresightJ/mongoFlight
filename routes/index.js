const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')


/* GET home page/ all flight. */
router.get('/', controller.index);

// Post new Flight
router.post('/', controller.postFlight);

// Get Add flight Page
router.get('/add-flight', controller.getAddFlights);

// Get Single Flight Page
router.get('/single-flight/:id', controller.getSingleFlight);





module.exports = router;
