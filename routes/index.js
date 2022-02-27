const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')


/* GET home page/ all flight. */
router.get('/', controller.index);

// Get Add flight Page
router.get('/add-flight', controller.getAddFlights);

// Get Single Flight Page
router.get('/single-flight/:id', controller.getSingleFlight);





module.exports = router;
