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
const getSingleFlight = async (req, res, next)  => {
  try {
  let id = req.params.id
  const flight =  await Flights.findById(id)
  
    let d = flight.departs
    let date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
    let time = `${d.getHours()}Hrs ${d.getMinutes()}m`
  res.render('singleFlight',{
    title: `welcome to Flight ${flight.flightNo}`,
    flight: flight,
    depart: date,
    time: time,
    parentId: id
  })
  
  } catch (error) {
    console.log(error)
  }
};

// post arrival

const postArrival = async (req, res) => {
  try {
    const id =  req.params.id;
  const arrivalAirport = req.body.arrivalAirport;
  const arrivalDate = req.body.arrivalDate
  const result = await Flights.findById(id)
  result.destinations.push({
    airport:arrivalAirport,
    date: arrivalDate
  })
  await result.save()
  res.redirect(`/single-flight/${result._id}`)
  
  } catch (error) {
    console.log(error)
  }
}

//remove arrival
const deleteArrival = async (req, res) => {
  try {
    const id = req.body.delArrival
    const parentId = req.body.parent
    const flight = await Flights.findById(parentId)
    
    await flight.destinations.id(id).remove()
    await flight.save()
    res.redirect(`/single-flight/${flight._id}`)
  } catch (error) {
    console.log(err)
  }
}





module.exports = {
  index,
  getAddFlights,
  getSingleFlight,
  postFlight,
  postArrival,
  deleteArrival

}