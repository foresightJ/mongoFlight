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

// Edit Single Flight
router.get('/single-flight/edit/:id', controller.getEditFlight);

// Post Arrival
router.post('/single-flight/:id/add-arrival', controller.postArrival)

// Delete Arrival
router.post('/single-flight/delArrival/', controller.deleteArrival)

// Delete Flight
router.post('/single-flight/delete-flight/:id', controller.deleteFlight)

// Post Ticket
router.post('/single-flight/:id/add-ticket', controller.postTicket)




module.exports = router;
