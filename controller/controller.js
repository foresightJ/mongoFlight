
// homePage or Get all flight page
const index = (req, res, next)  => {
	res.render('index', { title: 'Express' });
};

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

}