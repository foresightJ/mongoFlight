const Flights = require("../model/Flight");


// homePage or Get all flight page
const index = async(req, res, next)  => {
  try {
    const flights = await Flights.find().sort({departs: 'asc'});
    res.render('index', {
          title: 'MY FLIGHT',
          flights: flights
        })
  } catch (error) {
    console.log(error)
  }
};


// Create new Flight
const postFlight = async(req, res, next) => {
  try {
    const airline = req.body.airline;
  const airport = req.body.airport;
  const flightNo = req.body.flightNo;
  const depart = req.body.depart;

  const flight = new Flights({
    airline : airline,
    airport : airport,
    flightNo : flightNo,
    departs: depart
  })
  await flight.save()
  res.redirect('/')
  } catch (error) {
    console.log(error)    
  }
}

// Get add flight page
const getAddFlights = (req, res, next)  => {
	res.render('addFlight', { title: 'Express' });
};

// Get single flight page
const getSingleFlight = (req, res, next)  => {
	res.render('singleFlight', { title: 'Express' });
};







module.exports = {
  index,
  getAddFlights,
  getSingleFlight,
  postFlight,

}